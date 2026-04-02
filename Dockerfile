# ---------- Stage 1: Build ----------
FROM node:18-alpine AS builder

WORKDIR /app

# Instal openssl for prisma runnable
RUN apk add --no-cache openssl

# copy dependency
COPY package*.json ./

RUN npm ci

# copy source
COPY . .

# generate prisma client
RUN npx prisma generate

# build nextjs
RUN npm run build

# ---------- Stage 2: Production ----------
FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache openssl

# copy standalone runtime
COPY --from=builder /app/.next/standalone ./

# copy static files
COPY --from=builder /app/.next/static ./.next/static

# copy public assets
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]