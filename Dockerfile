#Put the node image as image's base
FROM node:latest

#
LABEL maintainer="ericghoubiguian@live.fr"

#Copy all the files and directories in the newly created directory node_world_server
COPY . /node_world_server

#Change work directory for the node_world_server project one
WORKDIR /node_world_server

#Update the npm utility
RUN npm update

#Install all the needed npm packages to run the node_world_server project
RUN npm install

#Expose the docker container listening port
EXPOSE 80

#Container instruction as entrypoint: 'npm start'
ENTRYPOINT ["npm", "start"]
