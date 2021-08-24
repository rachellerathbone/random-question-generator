FROM node:14-alpine

COPY . /opt/service/
WORKDIR /opt/service

RUN npm ci

EXPOSE 8080

CMD ["npm", "start"]
