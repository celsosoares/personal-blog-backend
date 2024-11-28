FROM node:20-alpine3.19

RUN apk add --no-cache bash

RUN yarn global add @nestjs/cli

USER node
WORKDIR /home/node/app
