
FROM node:8-alpine


RUN apk add --update tini \
    && mkdir -p /usr/src/app


WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install \
    && npm cache verify

COPY . .

EXPOSE 5000

CMD ["/sbin/tini", "--","npm", "start"]