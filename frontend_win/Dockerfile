# Етап 1: Побудова застосунку
FROM node:18 AS build

WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо всі файли проєкту
COPY . .

# Створюємо продакшн-білд
RUN npm run build

# Етап 2: Створення фінального образу для подачі статичних файлів
FROM nginx:alpine

# Копіюємо збілдовані файли з етапу build
COPY --from=build /app/build /usr/share/nginx/html

# Копіюємо конфігурацію Nginx (якщо вона тут потрібна)
COPY nginx.conf /etc/nginx/nginx.conf

# Відкриваємо порт 80
EXPOSE 80

# Запускаємо Nginx
CMD ["nginx", "-g", "daemon off;"]