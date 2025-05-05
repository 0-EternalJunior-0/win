# Вибираємо базовий образ Node.js для збірки додатку
FROM node:18 AS build
ENV NODE_OPTIONS=--openssl-legacy-provider

# Копіюємо файл package.json та встановлюємо залежності
COPY package.json package.json
RUN npm install

# Копіюємо всі файли у контейнер і будуємо додаток
COPY . .
RUN npm run build

# Використовуємо образ Nginx для сервера
FROM nginx:stable-alpine

# Копіюємо білд React у стандартну директорію nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копіюємо свій конфіг, якщо є
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Відкриваємо порт 80 (стандартний порт Nginx)
EXPOSE 8082

# Запускаємо Nginx
CMD ["nginx", "-g", "daemon off;"]
