FROM node:20.12.2

WORKDIR /app

# Копируем package.json
COPY package*.json ./

# Устанавливаем зависимости (включая dev)
RUN npm install --include=dev

# Копируем весь проект
COPY . .

# Команда по умолчанию
CMD ["npm", "start"]