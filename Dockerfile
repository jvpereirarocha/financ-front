FROM node:20.12-alpine

WORKDIR /app

ENV PORT=3000

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

RUN npm run build

CMD npm run dev
