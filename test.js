var express = require('express');
var Negotiator = require('negotiator');
var bodyParser = require('body-parser');
var i18n = require('./i18n');

var app = express();
var negotiator;
var currentLocale;

var selectionnableLanguages = [

	{value: "fr-fr", selected: "", text: "French"},
	{value: "en-us", selected: "", text: "English"},
	{value: "es-es", selected: "selected", text: "Spanish"},
	{value: "ca", selected: "", text: "Catalan"}
];

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

  var truc = listAllLocalesAsArray();

  if(truc.includes(currentLocale)){
	
	updateSelect();

  	res.setLocale(currentLocale);

  	res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages});
  }
});

app.post('/', function(req, res) {

  currentLocale = req.body.choosen_language;
  currentLocale = currentLocale.toLowerCase();

  updateSelect();

  res.setLocale(currentLocale);

  res.render('index.ejs', {"selectionnableLanguages": selectionnableLanguages});
});

app.listen('3000');
