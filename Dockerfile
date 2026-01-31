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

# Install curl for the Docker HEALTHCHECK
RUN apk add --no-cache curl

# Create non-root user `app` and make runtime dirs writable
RUN addgroup -S app && adduser -S -G app app \
    && mkdir -p /var/run /var/log/nginx /var/cache/nginx \
    && chown -R app:app /usr/share/nginx/html /var/run /var/log/nginx /var/cache/nginx /tmp

USER app

EXPOSE 3991

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD curl -f http://127.0.0.1:3991/health || exit 1

ENTRYPOINT ["nginx", "-g", "daemon off;"]