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

# Copy built static files and ensure they are owned by a non-root user.
COPY --from=builder /app/out /usr/share/nginx/html

# Create a non-root user `app` and make nginx writable where needed.
RUN addgroup -S app && adduser -S -G app app \
	&& chown -R app:app /usr/share/nginx/html /var/cache/nginx /var/run /var/log/nginx

USER app

EXPOSE 3991

ENTRYPOINT ["nginx", "-g", "daemon off;"]