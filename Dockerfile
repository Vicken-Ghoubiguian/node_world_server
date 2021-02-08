#Put the node image as image's base
FROM node:latest

#
LABEL maintainer="ericghoubiguian@live.fr"

#Copy all the files and directories in the newly created directory node_world_server
COPY . /node_world_server

#Definition of the timezone Docker image for the "Europe/Paris" one
RUN ln -sf /usr/share/zoneinfo/Europe/Paris /etc/localtime

#Define the Dockerfile argument 'user_owm_api_key' to specify the user's owm api key
ARG user_owm_api_key

#Define the Dockerfile argument 'user_fa_kit' to specify the user's font awesome kit
ARG user_fa_kit

#Define the environment variable 'api_owm_key' to take the 'user_owm_api_key' argument value and put it to run the app
ENV api_owm_key=$user_owm_api_key

#Define the environment variable 'fa_kit' to take the 'user_fa_kit' argument value and put it to run the app
ENV fa_kit=$user_fa_kit

#Change work directory for the node_world_server project one
WORKDIR /node_world_server

#Update the npm utility
RUN npm update

#Install all the needed npm packages to run the node_world_server project
RUN npm install

#Expose the docker container listening port
EXPOSE 80

#Container instruction as entrypoint: 'npm start -- --openWeatherAPIKey="api_owm_key" --fontAwesomeKit="fa_kit"'
CMD npm start -- --openWeatherAPIKey="${api_owm_key}" --fontAwesomeKit="${fa_kit}"