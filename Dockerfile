FROM node:8.9.4

RUN mkdir /app
WORKDIR /app

ENV PATH /app/nod_modules/.bin:$PATH

ADD package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.0 -g --silent

EXPOSE 5000

CMD ["npm", "start"]