FROM node:20

ENV PORT 1337
ENV HOST 127.0.0.1
ENV NODE_ENV production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
COPY .env.example /usr/src/app/.env
COPY public/uploads /usr/src/app/public/uploads
RUN yarn install

# Bundle app source
COPY . /usr/src/app

RUN yarn build
EXPOSE 1337

CMD [ "yarn", "start" ]