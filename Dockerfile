FROM node:10-alpine

WORKDIR /usr/app
COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN npm t

EXPOSE 3000
CMD ["yarn", "run", "start1"]
