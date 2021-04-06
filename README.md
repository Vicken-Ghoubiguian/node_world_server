# node_world_server

This is a web application to display current time, date and weather around the world for every timezones in every countries and many other things. This web application is available in four languages (French, English, Spanish and Catalan) which can be switched.

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

		* [Tutorial on Balena](#tutorial_balena)



5. [A few usefull links](#a_few_usefull_links)

6. [What is used in this project ?](#what_is_used_in_this_project)

7. [Conclusion](#conclusion)

<a name="what_is_this_project"/></a>
## What is this project ?

This project consists to develop a web application to .
It can be used in several cases:

* Create a desk clock or a nice gift during a maker project,

* build your own alarm clock in a maker project,

* use it in many other maker projects limited by our own imagination,

* learn much about using weather (via [OpenWeatherMap API](https://openweathermap.org/api)) and [GitHub API](https://docs.github.com/en/rest) to get informations and make some statistical calculus,

* learn NodeJS in details and use this technology to learn web development,

* use it in NodeJS and web development courses or tutorials,

* many other things limited by our own imagination

You can now access some examples in the 'projects_examples' folder, just [here](https://github.com/Vicken-Ghoubiguian/node_world_server/tree/main/projects_examples).

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
# Creating the node_world_server Docker image with all the values ​​for the defined parameters "user_owm_api_key" (corresponding to the user's OpenWeatherMap API key) and "user_fa_kit" (corresponding to the user's Font Awesome kit)...
docker build . -t node_world_server:latest --build-arg user_owm_api_key="<wished_openWeatherMap_API_key>" --build-arg user_fa_kit="<wished_font_awesome_kit>"

# Seeing the list of all the executed instructions to create the node_world_server Docker image...
docker image history node_world_server:latest

# Running the Docker container node_world_server from the Docker image of the same name...
docker container run -d --name node_world_server -p 80:80 node_world_server:latest

# Checking the IP address of the Docker container of the node_world_server application...
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' node_world_server
```
Congratulations, now the `node_world_server web` application is working.
To access this application, type the following address in the bar of your browser: [`http://localhost/`](http://localhost/).

It's now your turn to play. Now enjoy...

<a name="from_Docker_Hub"/></a>
### from Docker Hub

A Docker image is available on Docker hub just [here](https://hub.docker.com/r/wicken/node_world_server).
To deploy this web app by the image on Docker hub, please follow these commands in order:

```bash
# Pulling the official Docker image from Docker Hub...
docker pull wicken/node_world_server

# Running the Docker container node_world_server from the offical Docker image from Docker Hub...
docker container run -d --name node_world_server -p 80:80 wicken/node_world_server

# Checking the IP address of the Docker container of the node_world_server application...
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' node_world_server
```
Congratulations, now the `node_world_server web` application is working.
To access this application, type the following address in the bar of your browser: [`http://localhost/`](http://localhost/).

It's now your turn to play. Now enjoy...

<a name="with_Balena"/></a>
### with Balena...

<a name="what_is_balena"/></a>
### What is Balena ?

<a name="tutorial_balena"/></a>
### Tutorial on Balena

<a name="run_locally"></a>
### How to run locally this web app ?

<a name="a_few_usefull_links"/></a>
### A few usefull links

<a name="what_is_used_in_this_project"/></a>
### What is used in this project ?

<a name="conclusion"/></a>
### Conclusion
