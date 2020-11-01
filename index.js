var express = require('express');
var Negotiator = require('negotiator');
var bodyParser = require('body-parser');
var moment = require('moment-timezone');
var i18n = require('./i18n');

var app = express();
var negotiator;
var currentLocale;

// Array containing all languages with relatives datas...
var selectionnableLanguages = [

	{value: "fr-fr", selected: "", text: "French"},
	{value: "en-us", selected: "", text: "English"},
	{value: "es-es", selected: "selected", text: "Spanish"},
	{value: "ca", selected: "", text: "Catalan"}
];

// Array containing all timezones with relatives datas...
var timezones = [

	{timezone: "Africa/Abidjan", country_code: "CI", timezone: 0},
	{timezone: "Africa/Accra", country_code: "GH", timezone: 0},
	{timezone: "Africa/Addis_Ababa", country_code: "ET", timezone: 0},

	{timezone: "Europe/Oslo", country_code: "NO", timezone: 0},
	{timezone: "Europe/Paris", country_code: "FR", timezone: 0},

	{timezone: "Pacific/Port_Moresby", country_code: "PG", timezone: 0},
	{timezone: "Pacific/Rarotonga", country_code: "CK", timezone: 0},
	{timezone: "Pacific/Saipan", country_code: "MP", timezone: 0},
	{timezone: "Pacific/Tahiti", country_code: "PF", timezone: 0},
	{timezone: "Pacific/Tarawa", country_code: "KI", timezone: 0},
	{timezone: "Pacific/Tongatapu", country_code: "TO", timezone: 0},
	{timezone: "Pacific/Wake", country_code: "UM", timezone: 0},
	{timezone: "Pacific/Wallis", country_code: "WF", timezone: 0}
];

// Function to update the "selected" field of the corresponding language's JSON depending on whether the language is selected or not...
function updateSelect(){

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

  negotiator = new Negotiator(req);
  var browserLanguages = negotiator.languages();
  currentLocale = negotiator.language(browserLanguages);
  currentLocale = currentLocale.toLowerCase();

  var listOfAllLocales = listAllLocalesAsArray();

  if(currentLocale === "fr") {

	currentLocale = "fr-fr";
  }

  if(!listOfAllLocales.includes(currentLocale)){
	
	currentLocale = "en-us";
  }

  updateSelect();

  res.setLocale(currentLocale);

  res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages});

});

app.post('/', function(req, res) {

  currentLocale = req.body.choosen_language;
  currentLocale = currentLocale.toLowerCase();

  updateSelect();

  res.setLocale(currentLocale);

  res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages});
});

app.listen('3000');
