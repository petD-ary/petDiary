# 빌드 스테이지
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY .env ./
COPY . .
RUN npm run build

# 실행 스테이지
FROM node:18-slim
WORKDIR /app
COPY --chown=node:node --from=builder /app/public ./public
COPY --chown=node:node --from=builder /app/.next/static ./.next/static
COPY --chown=node:node --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/standalone/node_modules ./.next/node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./

EXPOSE 3000

CMD ["node", "server.js"]