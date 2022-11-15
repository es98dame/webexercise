FROM node:16.13.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN npm install react-scripts -g

COPY . ./

CMD ["npm", "start"]