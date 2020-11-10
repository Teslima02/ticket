# FROM node:alpine

# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .

# CMD ["npm", "run", "dev"]

FROM node:alpine

COPY . /opt/app

WORKDIR /opt/app/client-service

RUN yarn

CMD yarn start
