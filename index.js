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
var selectionnableTemperatureUnits = require('./config/seeds/temperatureUnits');
var formats = require('./config/seeds/formats');
var timezones = require('./config/seeds/timezones');

// Declaration of all required variables for the 'node_world_server' app...
var app = express();
var negotiator;
var currentLocale = null;
var currentDateAndTimeFormat = "MMMM Do YYYY, hh:mm:ss a";
var currentCountryCode = timezones.getCountryCodeFromTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
var currentTemperatureUnit = "Kelvin";

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

// Function to update the "selected" field of the corresponding language's JSON depending on whether the current is selected or not...
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

// Function to update the "selected" field of the corresponding date and time format's JSON depending on whether the current is selected or not...
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

// Function to update the "selected" field of the corresponding temperature unit's JSON depending on whether the current is selected or not...
function updateTemperatureUnit(currentTemperatureUnit) {

  for(var i = 0; i < selectionnableTemperatureUnits.length; i++){

    if(selectionnableTemperatureUnits[i].selected === "selected"){

      selectionnableTemperatureUnits[i].selected = "";
    }
  }

  for(var i = 0; i < selectionnableTemperatureUnits.length; i++){

    if(selectionnableTemperatureUnits[i].unit === currentTemperatureUnit){

      console.log("Ici " + currentTemperatureUnit);

      selectionnableTemperatureUnits[i].selected = "selected";
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

  //
  updateLanguageSelect();
  res.setLocale(currentLocale);

  //
  updateTemperatureUnit(currentTemperatureUnit);

  // Defining a series of array and hash table for treatments in templates...
  var weatherReferencesHashTable = new Object();
  var countryCodeHashTable = new Object();
  var renderTimezonesArray = [];

  // Configuration of all tables and hash tables...
  for(var i = 0; i < timezones.timezones.length; i++) {

    // Configuration of 'weatherReferencesHashTable' hash table and 'renderTimezonesArray' array...
    if(timezones.timezones[i].country_code === currentCountryCode) {

  		weatherReferencesHashTable[timezones.timezones[i].weather_reference] = timezones.timezones[i].country_code;
      renderTimezonesArray.push(timezones.timezones[i]);
    }

    // Configuration of 'countryCodeHashTable' hash table...
    if(!countryCodeHashTable.hasOwnProperty(timezones.timezones[i].country_code)) {

      if(timezones.timezones[i].country_code === currentCountryCode) {

          countryCodeHashTable[timezones.timezones[i].country_code] = 'selected';

      } else {

          countryCodeHashTable[timezones.timezones[i].country_code] = '';
      }
  	}
  }

  // Calling the 'getWeather' method from the 'openWeather' module 
  openWeather.getWeather(weatherReferencesHashTable, "5222a1c311ca31001b0877137d584c36").then(function(results) {

    //
    for(i = 0; i < results.length; i++)
    {
      // In the case that the current element is a valable weather structure...
      if(results[i].cod === 200) {

        // Treatment of 'weather_description' field for translation...
        results[i].weather_description = results[i].weather_description.charAt(0).toUpperCase() + results[i].weather_description.slice(1);
        results[i].weather_description = results[i].weather_description.split(' ').join('_');

        // Treatment of 'uv_risk' field for translation...
        results[i].uv_risk = results[i].uv_risk.charAt(0).toUpperCase() + results[i].uv_risk.slice(1);
        results[i].uv_risk = results[i].uv_risk.split(' ').join('_');
      }
    }

  	res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages, "selectionnableTemperatureUnits": selectionnableTemperatureUnits, "countryCodeHashTable": countryCodeHashTable, "timezones": renderTimezonesArray, "currentDateAndTimeFormat": currentDateAndTimeFormat, "formats": formats, "weatherResults": results});
    
  });
});

// 
app.post('/', function(req, res) {

  // Defining a series of array and hash table for treatments in templates...
  var weatherReferencesHashTable = new Object();
  var countryCodeHashTable = new Object();
  var renderTimezonesArray = [];

  /* Block of provisional solution... */
  negotiator = new Negotiator(req);
  var browserLanguages = negotiator.languages();
  currentLocale = negotiator.language(browserLanguages);
  currentLocale = currentLocale.toLowerCase();

  timezones.moment.locale(currentLocale);

  var listOfAllLocales = listAllLocalesAsArray();

  if(currentLocale === "fr") {

    currentLocale = "fr-fr";
  }

  if(!listOfAllLocales.includes(currentLocale)){
  
    currentLocale = "en-us";
  }

  updateLanguageSelect();

  //
  if(req.body.current_form === "choosen_country_code_form")
  {
    currentCountryCode = req.body.choosen_country_code;

    res.setLocale(currentLocale);

  } else if(req.body.current_form === "choosen_language_form") {

  	currentLocale = req.body.choosen_language;
  	currentLocale = currentLocale.toLowerCase();

  	timezones.moment.locale(currentLocale);
  	updateLanguageSelect();

  	res.setLocale(currentLocale);

  } else if(req.body.current_form === "choosen_format_form") {

  	currentDateAndTimeFormat = formats[parseInt(req.body.choosen_date_and_time_format)].format;
  	updateDaTSelect(parseInt(req.body.choosen_date_and_time_format));

  	res.setLocale(currentLocale);

  } else if(req.body.current_form === "choosen_temperature_unit_form") {

    currentTemperatureUnit = req.body.choosen_temperature_unit;
    updateTemperatureUnit(currentTemperatureUnit);
  }

  // Configuration of all tables and hash tables...
  for(var i = 0; i < timezones.timezones.length; i++) {

    // Configuration of 'weatherReferencesHashTable' hash table and 'renderTimezonesArray' array...
    if(timezones.timezones[i].country_code === currentCountryCode) {

      weatherReferencesHashTable[timezones.timezones[i].weather_reference] = timezones.timezones[i].country_code;
      renderTimezonesArray.push(timezones.timezones[i]);
    }

    // Configuration of 'countryCodeHashTable' hash table...
    if(!countryCodeHashTable.hasOwnProperty(timezones.timezones[i].country_code)) {

      if(timezones.timezones[i].country_code === currentCountryCode) {

          countryCodeHashTable[timezones.timezones[i].country_code] = 'selected';

      } else {

          countryCodeHashTable[timezones.timezones[i].country_code] = '';
      }
    }
  }

  setInterval(updateDateAndTime, 1000);

  // Calling the 'getWeather' method from the 'openWeather' module 
  openWeather.getWeather(weatherReferencesHashTable, "5222a1c311ca31001b0877137d584c36").then(function(results) {

    //
    for(i = 0; i < results.length; i++)
    {
      // In the case that the current element is a valable weather structure...
      if(results[i].cod === 200) {

        // Treatment of 'weather_description' field for translation...
        results[i].weather_description = results[i].weather_description.charAt(0).toUpperCase() + results[i].weather_description.slice(1);
        results[i].weather_description = results[i].weather_description.split(' ').join('_');

        // Treatment of 'uv_risk' field for translation...
        results[i].uv_risk = results[i].uv_risk.charAt(0).toUpperCase() + results[i].uv_risk.slice(1);
        results[i].uv_risk = results[i].uv_risk.split(' ').join('_');
      }
    }

    res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages, "selectionnableTemperatureUnits": selectionnableTemperatureUnits, "countryCodeHashTable": countryCodeHashTable, "timezones": renderTimezonesArray, "currentDateAndTimeFormat": currentDateAndTimeFormat, "formats": formats, "weatherResults": results});

  });
});

// Defining the listening port for the 'node_world_server' application...
app.listen('80');
