FROM node:14 AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN NODE_ENV=production yarn generate

FROM fholzer/nginx-brotli:v1.19.1

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/robots.txt /usr/share/nginx/html/
