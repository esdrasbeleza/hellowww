FROM node:10-alpine

WORKDIR /app
COPY . /app
RUN npm install --production

EXPOSE 80
CMD [ "npm", "start" ]

