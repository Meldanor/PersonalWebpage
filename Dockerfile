FROM node:23.4-alpine as build
WORKDIR /app-build
RUN apk add gzip brotli zstd zola
ADD package-lock.json package.json ./
RUN npm ci

# Build blog
COPY . ./

RUN npm run build
# Precompress files
RUN find public/ -path public/processed_images -prune -o -type f -exec sh -c "zstd -q {} && brotli {} && gzip -k {}" \;

# Custom nginx because the nginx docker is incompatible with brotli and zstd
FROM alpine:3.21 as final
RUN apk update && apk add brotli nginx nginx-mod-http-brotli nginx-mod-http-zstd
COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app-build/public /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
