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

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 3991

ENTRYPOINT ["nginx", "-g", "daemon off;"]