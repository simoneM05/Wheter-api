FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run tsc

EXPOSE 3000
EXPOSE 6379

CMD [ "npm","run","start" ]

