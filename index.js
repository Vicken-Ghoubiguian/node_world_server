var express = require('express');
var Negotiator = require('negotiator');
var bodyParser = require('body-parser');
var moment = require('moment-timezone');
var i18n = require('./i18n');

var app = express();
var negotiator;
var currentLocale = null;
var currentDateAndTimeFormat = "MMMM Do YYYY, hh:mm:ss a";

// Array containing all languages with relatives datas...
var selectionnableLanguages = [

	{value: "fr-fr", selected: "", text: "French"},
	{value: "en-us", selected: "", text: "English"},
	{value: "es-es", selected: "selected", text: "Spanish"},
	{value: "ca", selected: "", text: "Catalan"}
];

// Array containing all timezones with relatives datas...
var timezones = [

	//Africa timezones...
	{timezone: "Africa/Abidjan", country_code: "CI", moment: moment.tz("Africa/Abidjan"), color: "#ffdf00"},
	{timezone: "Africa/Accra", country_code: "GH", moment: moment.tz("Africa/Accra"), color: "#ffdf00"},
	{timezone: "Africa/Addis_Ababa", country_code: "ET", moment: moment.tz("Africa/Addis_Ababa"), color: "#ffdf00"},

	//Europe timezones...

	{timezone: "Europe/Oslo", country_code: "NO", moment: moment.tz("Europe/Oslo"), color: "#006400"},
	{timezone: "Europe/Paris", country_code: "FR", moment: moment.tz("Europe/Paris"), color: "#006400"},

	//Pacific timezones...
	{timezone: "Pacific/Apia", country_code: "WS", moment: moment.tz("Pacific/Apia"), color: "#4B0082"},
	{timezone: "Pacific/Auckland", country_code: "NZ", moment: moment.tz("Pacific/Auckland"), color: "#4B0082"},
	{timezone: "Pacific/Bougainville", country_code: "PG", moment: moment.tz("Pacific/Bougainville"), color: "#4B0082"},
	{timezone: "Pacific/Chatham", country_code: "NZ", moment: moment.tz("Pacific/Chatham"), color: "#4B0082"},
	{timezone: "Pacific/Chuuk", country_code: "FM", moment: moment.tz("Pacific/Chuuk"), color: "#4B0082"},
	{timezone: "Pacific/Easter", country_code: "CL", moment: moment.tz("Pacific/Easter"), color: "#4B0082"},
	{timezone: "Pacific/Efate", country_code: "VU", moment: moment.tz("Pacific/Efate"), color: "#4B0082"},
	{timezone: "Pacific/Enderbury", country_code: "KI", moment: moment.tz("Pacific/Enderbury"), color: "#4B0082"},
	{timezone: "Pacific/Fakaofo", country_code: "TK", moment: moment.tz("Pacific/Fakaofo"), color: "#4B0082"},
	{timezone: "Pacific/Fiji", country_code: "FJ", moment: moment.tz("Pacific/Fiji"), color: "#4B0082"},
	{timezone: "Pacific/Funafuti", country_code: "TV", moment: moment.tz("Pacific/Funafuti"), color: "#4B0082"},
	{timezone: "Pacific/Galapagos", country_code: "EC", moment: moment.tz("Pacific/Galapagos"), color: "#4B0082"},
	{timezone: "Pacific/Gambier", country_code: "PF", moment: moment.tz("Pacific/Gambier"), color: "#4B0082"},
	{timezone: "Pacific/Guadalcanal", country_code: "SB", moment: moment.tz("Pacific/Guadalcanal"), color: "#4B0082"},
	{timezone: "Pacific/Guam", country_code: "GU", moment: moment.tz("Pacific/Guam"), color: "#4B0082"},
	{timezone: "Pacific/Honolulu", country_code: "US", moment: moment.tz("Pacific/Honolulu"), color: "#4B0082"},
	{timezone: "Pacific/Kiritimati", country_code: "KI", moment: moment.tz("Pacific/Kiritimati"), color: "#4B0082"},
	{timezone: "Pacific/Kosrae", country_code: "FM", moment: moment.tz("Pacific/Kosrae"), color: "#4B0082"},
	{timezone: "Pacific/Kwajalein", country_code: "MH", moment: moment.tz("Pacific/Kwajalein"), color: "#4B0082"},
	{timezone: "Pacific/Majuro", country_code: "MH", moment: moment.tz("Pacific/Majuro"), color: "#4B0082"},
	{timezone: "Pacific/Marquesas", country_code: "PF", moment: moment.tz("Pacific/Marquesas"), color: "#4B0082"},
	{timezone: "Pacific/Midway", country_code: "UM", moment: moment.tz("Pacific/Midway"), color: "#4B0082"},
	{timezone: "Pacific/Nauru", country_code: "NR", moment: moment.tz("Pacific/Nauru"), color: "#4B0082"},
	{timezone: "Pacific/Niue", country_code: "NU", moment: moment.tz("Pacific/Niue"), color: "#4B0082"},
	{timezone: "Pacific/Norfolk", country_code: "NF", moment: moment.tz("Pacific/Norfolk"), color: "#4B0082"},
	{timezone: "Pacific/Noumea", country_code: "NC", moment: moment.tz("Pacific/Noumea"), color: "#4B0082"},
	{timezone: "Pacific/Pago_Pago", country_code: "AS", moment: moment.tz("Pacific/Pago_Pago"), color: "#4B0082"},
	{timezone: "Pacific/Palau", country_code: "PW", moment: moment.tz("Pacific/Palau"), color: "#4B0082"},
	{timezone: "Pacific/Pitcairn", country_code: "PN", moment: moment.tz("Pacific/Pitcairn"), color: "#4B0082"},
	{timezone: "Pacific/Pohnpei", country_code: "FM", moment: moment.tz("Pacific/Pohnpei"), color: "#4B0082"},
	{timezone: "Pacific/Port_Moresby", country_code: "PG", moment: moment.tz("Pacific/Port_Moresby"), color: "#4B0082"},
	{timezone: "Pacific/Rarotonga", country_code: "CK", moment: moment.tz("Pacific/Rarotonga"), color: "#4B0082"},
	{timezone: "Pacific/Saipan", country_code: "MP", moment: moment.tz("Pacific/Saipan"), color: "#4B0082"},
	{timezone: "Pacific/Tahiti", country_code: "PF", moment: moment.tz("Pacific/Tahiti"), color: "#4B0082"},
	{timezone: "Pacific/Tarawa", country_code: "KI", moment: moment.tz("Pacific/Tarawa"), color: "#4B0082"},
	{timezone: "Pacific/Tongatapu", country_code: "TO", moment: moment.tz("Pacific/Tongatapu"), color: "#4B0082"},
	{timezone: "Pacific/Wake", country_code: "UM", moment: moment.tz("Pacific/Wake"), color: "#4B0082"},
	{timezone: "Pacific/Wallis", country_code: "WF", moment: moment.tz("Pacific/Wallis"), color: "#4B0082"}
];

// Array containing all defined formats to display current date and time...
var formats = [

	{format: "DD/MM/YYYY HH:mm:ss", id: 0, selected: ""},
	{format: "DD - MM - YYYY hh:mm:ss a", id: 1, selected: ""},
	{format: "Do of MMMM hh:mm:ss a", id: 2, selected: ""},
	{format: "dddd MMM YYYY HH:mm:ss", id: 3, selected: ""},
	{format: "dddd MMMM YYYY HH:mm:ss", id: 4, selected: "selected"},
	{format: "MMMM Do YYYY, hh:mm:ss a", id: 5, selected: ""}
];

// Function to update the current date and time of all timezones...
function updateDateAndTime(){

	for(var i = 0; i < timezones.length; i++){

		timezones[i].moment = moment.tz(timezones[i].timezone)
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

  	moment.locale(currentLocale);
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

  res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages, "timezones": timezones, "currentDateAndTimeFormat": currentDateAndTimeFormat, "formats": formats});

});

app.post('/', function(req, res) {

  if(req.body.current_form === "choosen_language_form"){

  	currentLocale = req.body.choosen_language;
  	currentLocale = currentLocale.toLowerCase();

  	moment.locale(currentLocale);
  	updateLanguageSelect();

  	res.setLocale(currentLocale);

  } else if(req.body.current_form === "choosen_format_form"){

	currentDateAndTimeFormat = formats[parseInt(req.body.choosen_date_and_time_format)].format;
	updateDaTSelect(parseInt(req.body.choosen_date_and_time_format));

	res.setLocale(currentLocale);
  }

  setInterval(updateDateAndTime, 1000);

  res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages, "timezones": timezones, "currentDateAndTimeFormat": currentDateAndTimeFormat, "formats": formats});
});

app.listen('80');
