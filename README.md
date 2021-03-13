# node_world_server

This is a web application to display current time, date and weather around the world for every timezones in every countries and available in four languages (French, English, Spanish and Catalan).

## Contents

1. [What is this project ?](#what_is_this_project)

2. [How is it structured ?](#how_to_use_it)

3. [How to run this web app ?](#how_to_run_this_app)

	* [by the source code...](#by_source_code)

		* [For more informations](#for_more_informations)

	* [by Docker...](#by_docker)

		* [requirements](#requirements)

		* [from the Dockerfile](#from_the_Dockerfile)

		* [from Docker Hub](#from_Docker_Hub)

	* [with Balena...](#with_Balena)

		* [What is Balena ?](#what_is_balena)

		* [Deployment procedure](#deployment_procedure)

5. [A few usefull links](#a_few_usefull_links)

6. [What is used in this project ?](#what_is_used_in_this_project)

7. [Conclusion](#conclusion)

<a name="what_is_this_project"/></a>
## What is this project ?

<a name="how_to_use_it"/></a>
### How is it structured  ?

<a name="how_to_run_this_app"/></a>
## How to run this web app ?

<a name="by_source_code"/></a>
### by the source code...

The source code of the [`node_world_server`](https://github.com/Vicken-Ghoubiguian/node_world_server) web app is available on `GitHub`.
You must install the latest versions of [`Git`](https://git-scm.com), [`Node.js`](https://nodejs.org/en/) and [`NPM`](https://www.npmjs.com). For more information, go to the `Requirements and installation` section.
To install and run the `node_world_server` web app, please run these following commands in order:

```bash
# Cloning the `node_world_server` project from GitHub...
$ git clone https://github.com/Vicken-Ghoubiguian/node_world_server

# Changing the current folder for the project's one...
$ cd node_world_server

# Installing all required NPM packages listed in the 'package.json'...
$ npm install

# Running the web app passing in parameter `openWeatherAPIKey` (corresponding to the OpenWeather API key) and `fontAwesomeKit` (corresponding to the Font Awesome kit) both required to run it...
$ npm start -- --openWeatherAPIKey="<your_openweather_API_key>" --fontAwesomeKit="<your_font_awesome_kit>"
```
Congratulations, now the `node_world_server web` application is working.
To access this application, type the following address in the bar of your browser: [`http://localhost/`](http://localhost/).

It's now your turn to play. Now enjoy...

<a name="for_more_informations"/></a>
#### For more informations

* **How to get an OpenWeather API key ?**

To have an OpenWeather Map API key, you must first create an account from the official website [just here](https://fontawesome.com).
It is from this newly created account that you can generate and manage as many OpenWeather Map API keys as you want.

If you don't have an account, you can create it while creating your free Font Awesome kit from [right here](https://home.openweathermap.org/users/sign_up).

For more informations, you can read the documentation still on the official website.

* **How to get a Font Awesome Kit ?**

To have a Font Awesome kit, you must first create an account from the official website [just here](https://fontawesome.com).
It is from this newly created account that you can generate and manage as many Font Awesome kits as you want.

If you don't have an account, you can create it while creating your free Font Awesome kit from [right here](https://fontawesome.com/start).

For more informations, you can read the documentation still on the official website.

<a name="by_docker"></a>
### by Docker...

<a name="requirements"/></a>
### requirements

Docker...

<a name="from_the_Dockerfile"/></a>
### from the Dockerfile

A Dockerfile is available in the project root, and you can consult it [here](https://github.com/Vicken-Ghoubiguian/node_world_server/blob/main/Dockerfile).
To deploy this web app by the Dockerfile, please follow these commands in order:

```bash
# Creating the Go_world_server Docker image with all the values ​​for the defined parameters "user_owm_api_key" (corresponding to the user's OpenWeatherMap API key) and "user_fa_kit" (corresponding to the user's Font Awesome kit)...
docker build . -t node_world_server:latest --build-arg user_owm_api_key="<wished_openWeatherMap_API_key>" --build-arg user_fa_kit="<wished_font_awesome_kit>"

# Seeing the list of all the executed instructions to create the node_world_server Docker image...
docker image history node_world_server:latest

# Running the Docker container node_world_server from the Docker image of the same name...
docker container run -d --name node_world_server -p 80:80 node_world_server:latest

# Checking the IP address of the Docker container of the node_world_server application...
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' node_world_server
```
<a name="from_Docker_Hub"/></a>
### from Docker Hub

A Docker image is available on Docker hub just [here](https://hub.docker.com/r/wicken/node_world_server).
To deploy this web app by the image on Docker hub, please follow these commands in order:

```bash

```
<a name="with_Balena"/></a>
### with Balena...

<a name="what_is_balena"/></a>
### What is Balena ?

<a name="deployment_procedure"/></a>
### Deployment procedure

<a name="a_few_usefull_links"/></a>
### A few usefull links

<a name="what_is_used_in_this_project"/></a>
### What is used in this project ?

<a name="conclusion"/></a>
### Conclusion
