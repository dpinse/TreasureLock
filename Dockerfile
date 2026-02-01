FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install full dependencies for build
COPY package*.json ./
RUN npm install --prefer-offline --no-audit

# Copy source and build
COPY . ./
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image
FROM node:18-alpine
WORKDIR /app

# Copy built app and node_modules from builder
COPY --from=builder /app .

# Create non-root user and ensure permissions
RUN addgroup -S app && adduser -S -G app app \
    && mkdir -p /var/log/app && chown -R app:app /app /var/log/app

USER app

EXPOSE 3991

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q -O- http://127.0.0.1:3991/health || exit 1

CMD ["node","server.js"]