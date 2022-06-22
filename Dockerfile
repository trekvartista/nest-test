FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

COPY ./dist ./dist

CMD ["yarn", "start:dev"]
