# Встановлюємо базовий образ з Node.js
FROM node:16-alpine

# Вказуємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json з папки my-app
COPY my-app/package.json my-app/package-lock.json ./
RUN npm install

# Копіюємо решту файлів з папки my-app
COPY my-app/ ./

# Створюємо продакшн-буд
RUN npm run build

# Встановлюємо порти, які використовує додаток (якщо це необхідно для налаштувань сервера)
EXPOSE 3000

# Запускаємо додаток
CMD ["npm", "start"]
