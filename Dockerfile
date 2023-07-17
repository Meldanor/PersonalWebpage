FROM node:18.16 AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN NODE_ENV=production yarn generate

FROM fholzer/nginx-brotli:v1.23.4

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/robots.txt /usr/share/nginx/html/
COPY --from=builder /app/.output/public /usr/share/nginx/html/
