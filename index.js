var express = require('express');
var favicon = require('serve-favicon');
var Negotiator = require('negotiator');
var bodyParser = require('body-parser');

var i18n = require('./config/modules/i18n');
var selectionnableLanguages = require('./config/modules/selectionnableLanguages');
var formats = require('./config/modules/formats');
var timezones = require('./config/modules/timezones');

var app = express();
var negotiator;
var currentLocale = null;
var currentDateAndTimeFormat = "MMMM Do YYYY, hh:mm:ss a";

//
app.use(favicon("assets/images/favicon.png"));

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');

app.use(i18n);

app.get('/', function(req, res) {

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

  res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages, "timezones": timezones.timezones, "currentDateAndTimeFormat": currentDateAndTimeFormat, "formats": formats});

});

app.post('/', function(req, res) {

  if(req.body.current_form === "choosen_language_form"){

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

app.listen('80');
