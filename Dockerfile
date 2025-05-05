# Dockerfile для React
FROM node:18 as build

WORKDIR /app
COPY my-app/ ./
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
