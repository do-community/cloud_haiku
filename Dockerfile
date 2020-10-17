FROM node:alpine

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8080

CMD [ "node", "test.js" ]