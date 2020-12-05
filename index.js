// Importation of NPM modules...
var express = require('express');
var favicon = require('serve-favicon');
var Negotiator = require('negotiator');
var bodyParser = require('body-parser');

// Importation of internal modules...
var i18n = require('./config/modules/i18n');
var openWeather = require('./config/modules/openWeather');

// Importation of seeds...
var selectionnableLanguages = require('./config/seeds/selectionnableLanguages');
var formats = require('./config/seeds/formats');
var timezones = require('./config/seeds/timezones');

// Declaration of all required variables for the 'node_world_server' app...
var app = express();
var negotiator;
var currentLocale = null;
var currentDateAndTimeFormat = "MMMM Do YYYY, hh:mm:ss a";

// Declaration of static files and favicon image...
app.use(favicon("assets/images/favicon.png"));
app.use(express.static("assets"));

// Function to update the current date and time of all timezones...
function updateDateAndTime(){

	for(var i = 0; i < timezones.timezones.length; i++){

		timezones.timezones[i].moment = timezones.moment.tz(timezones.timezones[i].timezone)
	}

	console.log("TYTY...");
}

// Function to update the "selected" field of the corresponding language's JSON depending on whether the language is selected or not...
function updateLanguageSelect(){

	for(var i = 0; i < selectionnableLanguages.length; i++){

		if(selectionnableLanguages[i].selected === "selected"){

			selectionnableLanguages[i].selected = "";
		}
	}

	for(var i = 0; i < selectionnableLanguages.length; i++){

		if(selectionnableLanguages[i].value === currentLocale){

			selectionnableLanguages[i].selected = "selected";
		}
	}
}

// Function to update the "selected" field of the corresponding date and time format's JSON depending on whether the format is selected or not...
function updateDaTSelect(formatDaTId) {

	for(var i = 0; i < formats.length; i++){

		if(formats[i].selected === "selected"){

			formats[i].selected = "";
		}
	}

	for(var i = 0; i < formats.length; i++){

		if(formats[i].id === formatDaTId){

			formats[i].selected = "selected";
		}
	}
}

// Function to list all language locales ("value" field of each JSON) in a to-returned array...
function listAllLocalesAsArray(){

	var returnedLocalsArray = [];

	for(var i = 0; i < selectionnableLanguages.length; i++){

		returnedLocalsArray.push(selectionnableLanguages[i].value);
	}

	return returnedLocalsArray;
}

// 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Declaration of views files...
app.set('views', __dirname + '/views');

// Declaration of using 'i18n' module...
app.use(i18n);

// 
app.get('/', function(req, res) {

  // Defining the current locale at the call the 'node_world_server' application in your browser ...
  if(currentLocale === null) {

  	negotiator = new Negotiator(req);
  	var browserLanguages = negotiator.languages();
  	currentLocale = negotiator.language(browserLanguages);
  	currentLocale = currentLocale.toLowerCase();

  	timezones.moment.locale(currentLocale);
  }

  setInterval(updateDateAndTime, 1000);

  var listOfAllLocales = listAllLocalesAsArray();

  if(currentLocale === "fr") {

	currentLocale = "fr-fr";
  }

  if(!listOfAllLocales.includes(currentLocale)){
	
	currentLocale = "en-us";
  }

  updateLanguageSelect();

  res.setLocale(currentLocale);

  // Defining of the 'weatherReferencesHashTable' hash table and the 'renderTimezonesArray' array...
  var weatherReferencesHashTable = new Object();
  var renderTimezonesArray = [];

  // Configuration of the 'weatherReferencesHashTable' hash table for the bellow treatment with the 'getWeather' function...
  for(var i = 0; i < timezones.timezones.length; i++) {

    if(timezones.timezones[i].timezone === Intl.DateTimeFormat().resolvedOptions().timeZone) {

  		weatherReferencesHashTable[timezones.timezones[i].weather_reference] = timezones.timezones[i].country_code;
      renderTimezonesArray.push(timezones.timezones[i]);
  	}
  }

  // Calling the 'getWeather' method from the 'openWeather' module 
  openWeather.getWeather(weatherReferencesHashTable, "5222a1c311ca31001b0877137d584c36").then(function(results) {

  	console.log(results);

  	res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages, "globalTimezones": timezones.timezones, "timezones": renderTimezonesArray, "currentDateAndTimeFormat": currentDateAndTimeFormat, "formats": formats});
  });
});

// 
app.post('/', function(req, res) {

  if(req.body.current_form === "choosen_language_form") {

  	currentLocale = req.body.choosen_language;
  	currentLocale = currentLocale.toLowerCase();

  	timezones.moment.locale(currentLocale);
  	updateLanguageSelect();

  	res.setLocale(currentLocale);

  } else if(req.body.current_form === "choosen_format_form"){

  	currentDateAndTimeFormat = formats[parseInt(req.body.choosen_date_and_time_format)].format;
  	updateDaTSelect(parseInt(req.body.choosen_date_and_time_format));

  	res.setLocale(currentLocale);
  }

  setInterval(updateDateAndTime, 1000);

  res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages, "timezones": timezones.timezones, "currentDateAndTimeFormat": currentDateAndTimeFormat, "formats": formats});
});

// Defining the listening port for the 'node_world_server' application...
app.listen('80');
