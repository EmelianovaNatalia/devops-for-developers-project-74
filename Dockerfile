FROM node:20

WORKDIR /app

COPY app/package.json package.json
COPY app/package-lock.json package-lock.json

RUN npm install --legacy-peer-deps

COPY app/. .

EXPOSE 8080
CMD make dev
