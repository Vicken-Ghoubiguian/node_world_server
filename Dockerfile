#
FROM node:latest

#
LABEL maintainer="ericghoubiguian@live.fr"

#
COPY . /node_world_server

#
WORKDIR /node_world_server

#
RUN npm install ejs
RUN npm install i18n
RUN npm install express
RUN npm install negotiator
RUN npm install body-parser
RUN npm install moment-timezone

#
EXPOSE 3000

#
CMD ["node", "index.js"]
