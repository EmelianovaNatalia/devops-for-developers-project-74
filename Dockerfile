FROM node:20.12.2 AS test

WORKDIR /app

COPY app/package*.json ./

RUN npm install --include=dev

COPY app/ ./

CMD ["npm", "test"]
