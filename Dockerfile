#Put the node image as image's base
FROM node:latest

#
LABEL maintainer="ericghoubiguian@live.fr"

#Copy all the files and directories in the newly created directory node_world_server
COPY . /node_world_server

#Change work directory for the node_world_server project one
WORKDIR /node_world_server

#Install all the needed npm packages to run the node_world_server project
RUN npm install ejs
RUN npm install i18n
RUN npm install express
RUN npm install negotiator
RUN npm install body-parser
RUN npm install moment-timezone

#Expose the docker container listening port
EXPOSE 3000

#Container instruction as entrypoint: 'node index.js'
ENTRYPOINT ["node", "index.js"]
