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

	//Africa timezones...
	{timezone: "Africa/Abidjan", country_code: "CI", timestamp: moment.tz("Africa/Abidjan"), color: "#ffdf00"},
	{timezone: "Africa/Accra", country_code: "GH", timestamp: moment.tz("Africa/Accra"), color: "#ffdf00"},
	{timezone: "Africa/Addis_Ababa", country_code: "ET", timestamp: moment.tz("Africa/Addis_Ababa"), color: "#ffdf00"},

	//Europe timezones...

	{timezone: "Europe/Oslo", country_code: "NO", timestamp: moment.tz("Europe/Oslo"), color: "#006400"},
	{timezone: "Europe/Paris", country_code: "FR", timestamp: moment.tz("Europe/Paris"), color: "#006400"},

	//Pacific timezones...
	{timezone: "Pacific/Apia", country_code: "WS", timestamp: moment.tz("Pacific/Apia"), color: "#4B0082"},
	{timezone: "Pacific/Auckland", country_code: "NZ", timestamp: moment.tz("Pacific/Auckland"), color: "#4B0082"},
	{timezone: "Pacific/Bougainville", country_code: "PG", timestamp: moment.tz("Pacific/Bougainville"), color: "#4B0082"},
	{timezone: "Pacific/Chatham", country_code: "NZ", timestamp: moment.tz("Pacific/Chatham"), color: "#4B0082"},
	{timezone: "Pacific/Chuuk", country_code: "FM", timestamp: moment.tz("Pacific/Chuuk"), color: "#4B0082"},
	{timezone: "Pacific/Easter", country_code: "CL", timestamp: moment.tz("Pacific/Easter"), color: "#4B0082"},
	{timezone: "Pacific/Efate", country_code: "VU", timestamp: moment.tz("Pacific/Efate"), color: "#4B0082"},
	{timezone: "Pacific/Enderbury", country_code: "KI", timestamp: moment.tz("Pacific/Enderbury"), color: "#4B0082"},
	{timezone: "Pacific/Fakaofo", country_code: "TK", timestamp: moment.tz("Pacific/Fakaofo"), color: "#4B0082"},
	{timezone: "Pacific/Fiji", country_code: "FJ", timestamp: moment.tz("Pacific/Fiji"), color: "#4B0082"},
	{timezone: "Pacific/Funafuti", country_code: "TV", timestamp: moment.tz("Pacific/Funafuti"), color: "#4B0082"},
	{timezone: "Pacific/Galapagos", country_code: "EC", timestamp: moment.tz("Pacific/Galapagos"), color: "#4B0082"},
	{timezone: "Pacific/Gambier", country_code: "PF", timestamp: moment.tz("Pacific/Gambier"), color: "#4B0082"},
	{timezone: "Pacific/Guadalcanal", country_code: "SB", timestamp: moment.tz("Pacific/Guadalcanal"), color: "#4B0082"},
	{timezone: "Pacific/Guam", country_code: "GU", timestamp: moment.tz("Pacific/Guam"), color: "#4B0082"},
	{timezone: "Pacific/Honolulu", country_code: "US", timestamp: moment.tz("Pacific/Honolulu"), color: "#4B0082"},
	{timezone: "Pacific/Kiritimati", country_code: "KI", timestamp: moment.tz("Pacific/Kiritimati"), color: "#4B0082"},
	{timezone: "Pacific/Kosrae", country_code: "FM", timestamp: moment.tz("Pacific/Kosrae"), color: "#4B0082"},
	{timezone: "Pacific/Kwajalein", country_code: "MH", timestamp: moment.tz("Pacific/Kwajalein"), color: "#4B0082"},
	{timezone: "Pacific/Majuro", country_code: "MH", timestamp: moment.tz("Pacific/Majuro"), color: "#4B0082"},
	{timezone: "Pacific/Marquesas", country_code: "PF", timestamp: moment.tz("Pacific/Marquesas"), color: "#4B0082"},
	{timezone: "Pacific/Midway", country_code: "UM", timestamp: moment.tz("Pacific/Midway"), color: "#4B0082"},
	{timezone: "Pacific/Nauru", country_code: "NR", timestamp: moment.tz("Pacific/Nauru"), color: "#4B0082"},
	{timezone: "Pacific/Niue", country_code: "NU", timestamp: moment.tz("Pacific/Niue"), color: "#4B0082"},
	{timezone: "Pacific/Norfolk", country_code: "NF", timestamp: moment.tz("Pacific/Norfolk"), color: "#4B0082"},
	{timezone: "Pacific/Noumea", country_code: "NC", timestamp: moment.tz("Pacific/Noumea"), color: "#4B0082"},
	{timezone: "Pacific/Pago_Pago", country_code: "AS", timestamp: moment.tz("Pacific/Pago_Pago"), color: "#4B0082"},
	{timezone: "Pacific/Palau", country_code: "PW", timestamp: moment.tz("Pacific/Palau"), color: "#4B0082"},
	{timezone: "Pacific/Pitcairn", country_code: "PN", timestamp: moment.tz("Pacific/Pitcairn"), color: "#4B0082"},
	{timezone: "Pacific/Pohnpei", country_code: "FM", timestamp: moment.tz("Pacific/Pohnpei"), color: "#4B0082"},
	{timezone: "Pacific/Port_Moresby", country_code: "PG", timestamp: moment.tz("Pacific/Port_Moresby"), color: "#4B0082"},
	{timezone: "Pacific/Rarotonga", country_code: "CK", timestamp: moment.tz("Pacific/Rarotonga"), color: "#4B0082"},
	{timezone: "Pacific/Saipan", country_code: "MP", timestamp: moment.tz("Pacific/Saipan"), color: "#4B0082"},
	{timezone: "Pacific/Tahiti", country_code: "PF", timestamp: moment.tz("Pacific/Tahiti"), color: "#4B0082"},
	{timezone: "Pacific/Tarawa", country_code: "KI", timestamp: moment.tz("Pacific/Tarawa"), color: "#4B0082"},
	{timezone: "Pacific/Tongatapu", country_code: "TO", timestamp: moment.tz("Pacific/Tongatapu"), color: "#4B0082"},
	{timezone: "Pacific/Wake", country_code: "UM", timestamp: moment.tz("Pacific/Wake"), color: "#4B0082"},
	{timezone: "Pacific/Wallis", country_code: "WF", timestamp: moment.tz("Pacific/Wallis"), color: "#4B0082"}
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

  res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages, "timezones": timezones});

});

app.post('/', function(req, res) {

  currentLocale = req.body.choosen_language;
  currentLocale = currentLocale.toLowerCase();

  updateSelect();

  res.setLocale(currentLocale);

  res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages, "timezones": timezones});
});

app.listen('3000');
