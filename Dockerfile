FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

# Install dependencies; use `npm install` here to avoid `npm ci` failing when
# package.json and package-lock.json are not perfectly in sync in CI.
RUN npm install --prefer-offline --no-audit

COPY . ./

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build


FROM nginx:stable-alpine

# Copy built static files
COPY --from=builder /app/out /usr/share/nginx/html

# Copy our custom nginx config
COPY docker/nginx-app.conf /etc/nginx/nginx.conf

# Create non-root user `app` and make runtime dirs writable
RUN addgroup -S app && adduser -S -G app app \
    && mkdir -p /var/run /var/log/nginx /var/cache/nginx \
    && chown -R app:app /usr/share/nginx/html /var/run /var/log/nginx /var/cache/nginx /tmp

USER app

EXPOSE 3991

ENTRYPOINT ["nginx", "-g", "daemon off;"]