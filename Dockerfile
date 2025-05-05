FROM node:16-alpine

WORKDIR /app

# Копіюємо package.json та package-lock.json для встановлення залежностей
COPY my-app/package.json my-app/package-lock.json ./
RUN npm install

# Копіюємо решту файлів
COPY my-app/ ./

# Створюємо продакшн-буд
RUN npm run build

# Запускаємо додаток
CMD ["npm", "start"]