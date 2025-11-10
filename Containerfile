FROM node:24.11.0-slim AS build
WORKDIR /app-build
ADD package-lock.json package.json ./
RUN npm ci

# Build blog
COPY content content
COPY public public
COPY src src
COPY astro.config.mjs .
COPY tsconfig.json .

RUN npm run build

# Custom nginx because the nginx container is incompatible with brotli and zstd
FROM alpine:3.21 AS final
RUN apk update && apk add brotli nginx nginx-mod-http-brotli nginx-mod-http-zstd
COPY container/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app-build/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
