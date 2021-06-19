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
var selectionnablePressureUnits = require('./config/seeds/pressureUnits');
var selectionnableWindSpeedUnits = require('./config/seeds/windSpeedUnits');
var formats = require('./config/seeds/formats');
var timezones = require('./config/seeds/timezones');
var fontFamilies = require('./config/seeds/fontFamilies');

// Declaration of all required variables for the 'node_world_server' app with their default values...
var app = express();
var negotiator;
var currentLocale = null;
var currentDateAndTimeFormat = "X";
var currentCountryCode = timezones.getCountryCodeFromTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
var currentTemperatureUnit = "Kelvin";
var currentTemperatureUnitSymbol = "";
var currentPressureUnit = "hectoPascal";
var currentPressureUnitSymbol = "hPa";
var currentWindSpeedUnit = "meter_per_second";
var currentWindSpeedUnitSymbol = "m/s";
var currentFontFamily = fontFamilies.getFontFamilyFromId(23);

// Retrieving the array of font families...
var fontFamiliesArray = fontFamilies.fontFamilies;

// Catching, treating and getting passed arguments to the 'passedArguments' constant...
const passedArguments = require('minimist')(process.argv.slice(2));

// Definition of all variables containing all values (openweathermap api key and Font Awesome Kit) to work the web app...
var openWeatherAPIKey = passedArguments['openWeatherAPIKey'];
var fontAwesomeKit = passedArguments['fontAwesomeKit'];

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
function updateTemperatureUnit(wishedCurrentTemperatureUnit) {

  for(var i = 0; i < selectionnableTemperatureUnits.length; i++){

    if(selectionnableTemperatureUnits[i].selected === "selected"){

      selectionnableTemperatureUnits[i].selected = "";
    }
  }

  for(var i = 0; i < selectionnableTemperatureUnits.length; i++){

    if(selectionnableTemperatureUnits[i].unit === wishedCurrentTemperatureUnit){

      selectionnableTemperatureUnits[i].selected = "selected";
    }
  }
}

// Function to update the "selected" field of the corresponding pressure unit's JSON depending on whether the current is selected or not...
function updatePressureUnit(wishedCurrentPressureUnit) {

  for(var i = 0; i < selectionnablePressureUnits.length; i++){

    if(selectionnablePressureUnits[i].selected === "selected"){

      selectionnablePressureUnits[i].selected = "";
    }
  }

  for(var i = 0; i < selectionnablePressureUnits.length; i++){

    if(selectionnablePressureUnits[i].unit === wishedCurrentPressureUnit){

      selectionnablePressureUnits[i].selected = "selected";
    }
  }
}

// Function to update the "selected" field of the corresponding wind speed unit's JSON depending on whether the current is selected or not...
function updateWindSpeedUnit(wishedCurrentWindSpeedUnit) {

  for(var i = 0; i < selectionnableWindSpeedUnits.length; i++){

    if(selectionnableWindSpeedUnits[i].selected === "selected"){

      selectionnableWindSpeedUnits[i].selected = "";
    }
  }

  for(var i = 0; i < selectionnableWindSpeedUnits.length; i++){

    if(selectionnableWindSpeedUnits[i].unit === wishedCurrentWindSpeedUnit){

      selectionnableWindSpeedUnits[i].selected = "selected";
    }
  }
}

// Function to update the "selected" field of the corresponding font family's JSON depending on whether the current is selected or not...
function updateFontFamily(wishedCurrentFontFamily) {

  for(var i = 0; i < fontFamiliesArray.length; i++){

    if(fontFamiliesArray[i].selected === "selected"){

      fontFamiliesArray[i].selected = "";
    }
  }

  for(var i = 0; i < fontFamiliesArray.length; i++){

    if(fontFamiliesArray[i].font === wishedCurrentFontFamily){

      fontFamiliesArray[i].selected = "selected";
    }
  }
}

// Function to list all language locales ("value" field of each JSON) in a to-returned array...
function listAllLocalesAsArray() {

	var returnedLocalsArray = [];

	for(var i = 0; i < selectionnableLanguages.length; i++){

		returnedLocalsArray.push(selectionnableLanguages[i].value);
	}

	return returnedLocalsArray;
}

// Function to identify the format id passed as a parameter in the JSON...
function identificationIDParDaTFormat(formatDaT) {

  var DaTFormatId = 0;

  for(var i = 0; i < formats.length; i++){

    if(formats[i].format === formatDaT) {

      DaTFormatId = formats[i].id;

      break;
    }
  }

  return DaTFormatId;
}

// Function to identify the temperature unit symbol of the 'wishedTemperatureUnit' temperature unit passed in parameter...
function getTemperatureUnitSymbol(wishedTemperatureUnit) {

  var temperatureUnitSymbol = "";

  for(var i = 0; i < selectionnableTemperatureUnits.length; i++){

    if(selectionnableTemperatureUnits[i].unit === wishedTemperatureUnit) {

      temperatureUnitSymbol = selectionnableTemperatureUnits[i].symbol;

      break;
    }
  }

  return temperatureUnitSymbol;
}

// Function to identify the pressure unit symbol of the 'wishedPressureUnit' pressure unit passed in parameter...
function getPressureUnitSymbol(wishedPressureUnit) {

  var pressureUnitSymbol = "";

  for(var i = 0; i < selectionnablePressureUnits.length; i++){

    if(selectionnablePressureUnits[i].unit === wishedPressureUnit) {

      pressureUnitSymbol = selectionnablePressureUnits[i].symbol;      

      break;
    }
  }

  return pressureUnitSymbol;
}

// Function to identify the wind speed unit symbol of the 'wishedWindSpeedUnit' wind speed unit passed in parameter...
function getWindSpeedUnitSymbol(wishedWindSpeedUnit) {


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

    // Configuration of 'negociator' and 'browserLanguages' variables...
  	negotiator = new Negotiator(req);
  	var browserLanguages = negotiator.languages();

    // Configuration of 'currentLocale' variable...
  	currentLocale = negotiator.language(browserLanguages);
  	currentLocale = currentLocale.toLowerCase();

    // Affectation of 'currentLocale' at the locale for timezones...
  	timezones.moment.locale(currentLocale);
  }

  setInterval(updateDateAndTime, 1000);

  // Listing all locales and put all of them in the 'listOfAllLocales' array...
  var listOfAllLocales = listAllLocalesAsArray();

  // Particular case of french language...
  if(currentLocale === "fr") {

	   currentLocale = "fr-fr";
  }

  // Particular case of 'currentLocale' value not in list of predefined locales...
  if(!listOfAllLocales.includes(currentLocale)){
	
	   currentLocale = "en-us";
  }

  // Updating the languages 'select' for the corresponding form...
  updateLanguageSelect();

  //
  res.setLocale(currentLocale);

  // 
  updateDaTSelect(identificationIDParDaTFormat(currentDateAndTimeFormat));

  // Defining the temperature unit symbol from the  'currentTemperatureUnit' variable...
  currentTemperatureUnitSymbol = getTemperatureUnitSymbol(currentTemperatureUnit);

  // Updating the temperature unit 'select' for the corresponding form...
  updateTemperatureUnit(currentTemperatureUnit);

  // Updating the pressure unit 'select' for the corresponding form...
  updatePressureUnit(currentPressureUnit);

  // Updating the familly font 'select' for the corresponding form...
  updateFontFamily(currentFontFamily[0]);

  // Defining the pressure unit symbol from the  'currentTemperatureUnit' variable...
  currentPressureUnitSymbol = getPressureUnitSymbol(currentPressureUnit);

  // Defining a series of array and hash table for treatments in templates...
  var weatherReferencesHashTable = new Object();
  var countryCodeHashTable = new Object();
  var renderTimezonesArray = [];

  // Definition of the array 'keysOfCountryCodeHashTable' which will contain all the keys used in the associative array 'countryCodeHashTable'...
  var keysOfCountryCodeHashTable = [];

  // Configuration of all tables and hash tables...
  for(var i = 0; i < timezones.timezones.length; i++) {

    // Configuration of 'weatherReferencesHashTable' hash table and 'renderTimezonesArray' array...
    if(timezones.timezones[i].country_code === currentCountryCode) {

  		weatherReferencesHashTable[timezones.timezones[i].weather_reference] = timezones.timezones[i].country_code;
      renderTimezonesArray.push(timezones.timezones[i]);
    }

    // Fill in all the country codes entered in the JSON file of the timezones in the intermediate table 'keysOfCountryCodeHashTable'...
    if(!keysOfCountryCodeHashTable.includes(timezones.timezones[i].country_code)) {

      keysOfCountryCodeHashTable.push(timezones.timezones[i].country_code);
    }
  }

  // Sort all country codes alphabetically...
  keysOfCountryCodeHashTable.sort();

  // Browse of the array 'keysOfCountryCodeHashTable' containing the future keys of the future associative array 'countryCodeHashTable'...
  for(var i = 0; i < keysOfCountryCodeHashTable.length; i++) {

    // Configuration of the 'selected' element...
    if(keysOfCountryCodeHashTable[i] === currentCountryCode) {

      countryCodeHashTable[keysOfCountryCodeHashTable[i]] = 'selected';

    } else {

       countryCodeHashTable[keysOfCountryCodeHashTable[i]] = '';
    }
  }

  // Calling the 'getWeather' method from the 'openWeather' module 
  openWeather.getWeather(weatherReferencesHashTable, openWeatherAPIKey).then(function(results) {

    //
    for(i = 0; i < results.length; i++)
    {
      // In the case that the current element is a valable weather structure...
      if(results[i].cod === 200) {

        // Treatment of 'weather_description' field for translation...
        results[i].weather_description = results[i].weather_description.charAt(0).toUpperCase() + results[i].weather_description.slice(1);
        results[i].weather_description = results[i].weather_description.split(' ').join('_');

        // In the case where the current format for dates and times is "timestamp"...
        if(currentDateAndTimeFormat === "X") {

          // Treatment for sunrise and sunset dates and times without any argument for the format for dates and times...
          results[i].sys_sunrise = openWeather.dateAndTimeFormatConversionFunction(results[i].sys_sunrise, results[i].timezone);
          results[i].sys_sunset = openWeather.dateAndTimeFormatConversionFunction(results[i].sys_sunset, results[i].timezone);

        // In other cases...
        } else {

          // Treatment for sunrise and sunset dates and times in the newly whished format for dates and times...
          results[i].sys_sunrise = openWeather.dateAndTimeFormatConversionFunction(results[i].sys_sunrise, results[i].timezone, "HH:mm:ss");
          results[i].sys_sunset = openWeather.dateAndTimeFormatConversionFunction(results[i].sys_sunset, results[i].timezone, "HH:mm:ss");
        }

        // Treatment of 'uv_risk' field for translation...
        results[i].uv_risk = results[i].uv_risk.charAt(0).toUpperCase() + results[i].uv_risk.slice(1);
        results[i].uv_risk = results[i].uv_risk.split(' ').join('_');
      }
    }

    // Definition of the 'isAvailableFlag' variable with the 'true' default value...
    var isAvailableFlag = true;

    // Definition of the 'currentCountryFlagURL' variable, an empty variable...
    var currentCountryFlagURL = "";

    // In the case where the country code is "NaNC" (no identified country), so...
    if(currentCountryCode === "NaNC") {

      // There is not available flag, the value of the 'isAvailableFlag' variable is set to 'false'...
      isAvailableFlag = false;

      // Configuration of the 'currentCountryFlagURL' without any flag to display...
      currentCountryFlagURL = "";

    // In the contrary case ("else")...
    } else {

      // There is an available flag, the value of the 'isAvailableFlag' variable is set to 'true'...
      isAvailableFlag = true;

      // Configuration of the 'currentCountryFlagURL' to get and display current country's flag...
      currentCountryFlagURL = "https://flagcdn.com/h40/" + currentCountryCode.toLowerCase() + ".png";
    }

  	res.render('index.ejs', {

                             "currentCountryFlagURL": currentCountryFlagURL, 
                             "isAvailableFlag": isAvailableFlag, 
                             "selectionnableLanguages": selectionnableLanguages, 
                             "currentTemperatureUnitSymbol": currentTemperatureUnitSymbol, 
                             "currentPressureUnitSymbol": currentPressureUnitSymbol, 
                             "fontAwesomeKit": fontAwesomeKit, 
                             "selectionnableTemperatureUnits": selectionnableTemperatureUnits, 
                             "selectionnablePressureUnits": selectionnablePressureUnits, 
                             "selectionnableWindSpeedUnits": selectionnableWindSpeedUnits,
                             "countryCodeHashTable": countryCodeHashTable, 
                             "timezones": renderTimezonesArray, 
                             "currentDateAndTimeFormat": currentDateAndTimeFormat, 
                             "fontFamilies": fontFamiliesArray, 
                             "formats": formats, 
                             "weatherResults": results, 
                             "currentFontFamily": currentFontFamily

                          });
  });
});

// 
app.post('/', function(req, res) {

  // Defining a series of array and hash table for treatments in templates...
  var weatherReferencesHashTable = new Object();
  var countryCodeHashTable = new Object();
  var renderTimezonesArray = [];
  var listOfAllLocales = [];

  // Definition of the array 'keysOfCountryCodeHashTable' which will contain all the keys used in the associative array 'countryCodeHashTable'...
  var keysOfCountryCodeHashTable = [];

  // If (or in the case) the 'currentLocale' variable is null so...
  if(currentLocale === null){

    // Configuration of 'negociator' and 'browserLanguages' variables...
    negotiator = new Negotiator(req);
    var browserLanguages = negotiator.languages();

    // Configuration of 'currentLocale' variable...
    currentLocale = negotiator.language(browserLanguages);
    currentLocale = currentLocale.toLowerCase();

  }

  // Affectation of 'currentLocale' at the locale for timezones...
  timezones.moment.locale(currentLocale);

  // Listing all locales and put all of them in the 'listOfAllLocales' array...
  listOfAllLocales = listAllLocalesAsArray();

  // Particular case of french language...
  if(currentLocale === "fr") {

    currentLocale = "fr-fr";
  }

  // Particular case of 'currentLocale' value not in list of predefined locales...
  if(!listOfAllLocales.includes(currentLocale)){
  
    currentLocale = "en-us";
  }

  // Updating the languages 'select' for the corresponding form...
  updateLanguageSelect();

  // If the submit form is the "choosen_country_code_form" one...
  if(req.body.current_form === "choosen_country_code_form")
  {
    currentCountryCode = req.body.choosen_country_code;

    res.setLocale(currentLocale);

  // If the submit form is the "choosen_language_form" one...
  } else if(req.body.current_form === "choosen_language_form") {

  	currentLocale = req.body.choosen_language;
  	currentLocale = currentLocale.toLowerCase();

  	timezones.moment.locale(currentLocale);
  	updateLanguageSelect();

  	res.setLocale(currentLocale);

  // If the submit form is the "choosen_format_form" one...
  } else if(req.body.current_form === "choosen_format_form") {

  	currentDateAndTimeFormat = formats[parseInt(req.body.choosen_date_and_time_format)].format;
  	updateDaTSelect(parseInt(req.body.choosen_date_and_time_format));

  	res.setLocale(currentLocale);

  // If the submit form is the "choosen_temperature_unit_form" one...
  } else if(req.body.current_form === "choosen_temperature_unit_form") {

    currentTemperatureUnit = req.body.choosen_temperature_unit;
    currentTemperatureUnitSymbol = getTemperatureUnitSymbol(currentTemperatureUnit);

    updateTemperatureUnit(currentTemperatureUnit);

    res.setLocale(currentLocale);

  // If the submit form is the "choosen_pressure_unit_form" one...
  } else if(req.body.current_form === "choosen_pressure_unit_form") {

    currentPressureUnit = req.body.choosen_pressure_unit;
    currentPressureUnitSymbol = getPressureUnitSymbol(currentPressureUnit);

    updatePressureUnit(currentPressureUnit); 

    res.setLocale(currentLocale);

  // If the submit form is the "choosen_font_family_form" one...
  } else if(req.body.current_form === "choosen_font_family_form") {

    // Determination of the selected family font...
    var choosenFontFamilyId = parseInt(req.body.choosen_font_family_format);
    var choosenFontFamilyName = fontFamilies.getFontFamilyFromId(choosenFontFamilyId);

    // Definition of the selected family font as 'currentFontFamily' value (so...current font family of the app)...
    currentFontFamily = choosenFontFamilyName;

    res.setLocale(currentLocale);
  }

  // Configuration of all tables and hash tables...
  for(var i = 0; i < timezones.timezones.length; i++) {

    // Configuration of 'weatherReferencesHashTable' hash table and 'renderTimezonesArray' array...
    if(timezones.timezones[i].country_code === currentCountryCode) {

      weatherReferencesHashTable[timezones.timezones[i].weather_reference] = timezones.timezones[i].country_code;
      renderTimezonesArray.push(timezones.timezones[i]);
    }

    // Fill in all the country codes entered in the JSON file of the timezones in the intermediate table 'keysOfCountryCodeHashTable'...
    if(!keysOfCountryCodeHashTable.includes(timezones.timezones[i].country_code)) {

      keysOfCountryCodeHashTable.push(timezones.timezones[i].country_code);
    }
  }

  // Sort all country codes alphabetically...
  keysOfCountryCodeHashTable.sort();

  // Browse of the array 'keysOfCountryCodeHashTable' containing the future keys of the future associative array 'countryCodeHashTable'...
  for(var i = 0; i < keysOfCountryCodeHashTable.length; i++) {

    // Configuration of the 'selected' element...
    if(keysOfCountryCodeHashTable[i] === currentCountryCode) {

      countryCodeHashTable[keysOfCountryCodeHashTable[i]] = 'selected';

    } else {

       countryCodeHashTable[keysOfCountryCodeHashTable[i]] = '';
    }
  }

  setInterval(updateDateAndTime, 1000);

  // Calling the 'getWeather' method from the 'openWeather' module 
  openWeather.getWeather(weatherReferencesHashTable, openWeatherAPIKey).then(function(results) {

    // Loop to cover all of multiple weathers...
    for(i = 0; i < results.length; i++)
    {
      // In the case that the current element is a valable weather structure...
      if(results[i].cod === 200) {

        // Treatment of 'weather_description' field for translation...
        results[i].weather_description = results[i].weather_description.charAt(0).toUpperCase() + results[i].weather_description.slice(1);
        results[i].weather_description = results[i].weather_description.split(' ').join('_');

        // Treatment for all temperatures...
        results[i].main_temp = openWeather.temperatureConversionFunction(results[i].main_temp, currentTemperatureUnit);
        results[i].main_feels_like = openWeather.temperatureConversionFunction(results[i].main_feels_like, currentTemperatureUnit);
        results[i].main_temp_min = openWeather.temperatureConversionFunction(results[i].main_temp_min, currentTemperatureUnit);
        results[i].main_temp_max = openWeather.temperatureConversionFunction(results[i].main_temp_max, currentTemperatureUnit);

        // In the case where the current format for dates and times is "timestamp"...
        if(currentDateAndTimeFormat === "X") {

          // Treatment for sunrise and sunset dates and times without any argument for the format for dates and times...
          results[i].sys_sunrise = openWeather.dateAndTimeFormatConversionFunction(results[i].sys_sunrise, results[i].timezone);
          results[i].sys_sunset = openWeather.dateAndTimeFormatConversionFunction(results[i].sys_sunset, results[i].timezone);

        // In other cases...
        } else {

          // Treatment for sunrise and sunset dates and times in the newly whished format for dates and times...
          results[i].sys_sunrise = openWeather.dateAndTimeFormatConversionFunction(results[i].sys_sunrise, results[i].timezone, "HH:mm:ss");
          results[i].sys_sunset = openWeather.dateAndTimeFormatConversionFunction(results[i].sys_sunset, results[i].timezone, "HH:mm:ss");
        }

        //Treatment for the pressure...
        results[i].main_pressure = openWeather.pressureConversionFunction(results[i].main_pressure, currentPressureUnit);

        // Treatment of 'uv_risk' field for translation...
        results[i].uv_risk = results[i].uv_risk.charAt(0).toUpperCase() + results[i].uv_risk.slice(1);
        results[i].uv_risk = results[i].uv_risk.split(' ').join('_');
      }
    }

    // Definition of the 'isAvailableFlag' variable with the 'true' default value...
    var isAvailableFlag = true;

    // Definition of the 'currentCountryFlagURL' variable, an empty variable...
    var currentCountryFlagURL = "";

    // In the case where the country code is "NaNC" (no identified country), so...
    if(currentCountryCode === "NaNC") {

      // There is not available flag, the value of the 'isAvailableFlag' variable is set to 'false'...
      isAvailableFlag = false;

      // Configuration of the 'currentCountryFlagURL' without any flag to display...
      currentCountryFlagURL = "";

    // In the contrary case ("else")...
    } else {

      // There is an available flag, the value of the 'isAvailableFlag' variable is set to 'true'...
      isAvailableFlag = true;

      // Configuration of the 'currentCountryFlagURL' to get and display current country's flag...
      currentCountryFlagURL = "https://flagcdn.com/h40/" + currentCountryCode.toLowerCase() + ".png";
    }

    // Updating the familly font 'select' for the corresponding form...
    updateFontFamily(currentFontFamily[0]);

    res.render('index.ejs', {

                             "currentCountryFlagURL": currentCountryFlagURL, 
                             "isAvailableFlag": isAvailableFlag, 
                             "selectionnableLanguages": selectionnableLanguages, 
                             "currentTemperatureUnitSymbol": currentTemperatureUnitSymbol, 
                             "currentPressureUnitSymbol": currentPressureUnitSymbol, 
                             "fontAwesomeKit": fontAwesomeKit, 
                             "selectionnableTemperatureUnits": selectionnableTemperatureUnits, 
                             "selectionnablePressureUnits": selectionnablePressureUnits,
                             "selectionnableWindSpeedUnits": selectionnableWindSpeedUnits, 
                             "countryCodeHashTable": countryCodeHashTable, 
                             "timezones": renderTimezonesArray, 
                             "currentDateAndTimeFormat": currentDateAndTimeFormat, 
                             "fontFamilies": fontFamiliesArray, 
                             "formats": formats, 
                             "weatherResults": results, 
                             "currentFontFamily": currentFontFamily

                           });
  });
});

// Defining the listening port for the 'node_world_server' application...
app.listen('80');
