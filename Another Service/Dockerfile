FROM node:16

WORKDIR /usr/src/AnotherService

COPY . .

RUN npm install

EXPOSE 3002
CMD [ "node", "index.js" ]