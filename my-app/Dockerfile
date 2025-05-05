# Використовуємо Node.js для побудови додатку
FROM node:18 AS build

WORKDIR /app

# Копіюємо package.json і package-lock.json
COPY package.json package-lock.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту файлів
COPY . .

# Створюємо продакшн-білд
RUN npm run build
