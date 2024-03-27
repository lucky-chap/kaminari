FROM --platform=${BUILDPLATFORM:-linux/amd64} node:20-bookworm-slim AS base

FROM base AS deps
ARG APP_NAME=kaminari

WORKDIR /app/$APP_NAME

# Install dependencies
COPY package.json package-lock.json postcss.config.js tsconfig.json ./
RUN npm --config.update-notifier=false install
# sharp is needed for this project
RUN npm i sharp

# Rebuild the source code only when needed
FROM base AS builder
ARG APP_NAME=kaminari

WORKDIR /app
COPY --from=deps /app/$APP_NAME/node_modules ./$APP_NAME/node_modules/
COPY ./ ./$APP_NAME/
WORKDIR /app/$APP_NAME

ENV NEXT_TELEMETRY_DISABLED=1

RUN yarn build

# Add a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Production image, copy all the files and run next
FROM --platform=${BUILDPLATFORM:-linux/amd64} gcr.io/distroless/nodejs20-debian12 AS runner
ARG APP_NAME=kaminari

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/$APP_NAME/.next/standalone ./$APP_NAME/
WORKDIR /app/$APP_NAME
COPY --from=builder --chown=nextjs:nodejs /app/$APP_NAME/.next/static ./.next/static
COPY --from=builder /app/$APP_NAME/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000
# set hostname to localhost
ENV HOSTNAME="0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["server.js"]
