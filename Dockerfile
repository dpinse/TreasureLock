FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

# Use `npm ci` to install exactly from package-lock.json for reproducible builds
# and to avoid differences that can trigger Next's lockfile patcher.
RUN npm ci --prefer-offline --no-audit

COPY . ./

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build


FROM nginx:stable-alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 3991

ENTRYPOINT ["nginx", "-g", "daemon off;"]