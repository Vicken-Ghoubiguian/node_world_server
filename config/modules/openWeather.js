//
var axios = require('axios');

// Definition of Hash Table 'citiesAndCountries' and adding all of its values...
var citiesAndCountries = new Object();
citiesAndCountries["Paris"] = "FR";
citiesAndCountries["Oslo"] = "NO";
citiesAndCountries["Yerevan"] = "AM";
citiesAndCountries["Nauru"] = "NR";

var apiKey = "5222a1c311ca31001b0877137d584c36";

// Definition of the 'temperatureConversionFunction' function to convert the 'temperatureValue' temperature value in the wished 'temperatureUnit' unit...
function temperatureConversionFunction(temperatureValue, temperatureUnit = "Kelvin") {


}

// Definition of the 'pressureConversionFunction' function to convert the 'pressureValue' pressure value in the wished 'Hectopascal' unit...
function pressureConversionFunction(pressureValue, pressureUnit = "Hectopascal") {


}

// Definition of the asynchronous 'getWeather' function which returns the weather for all the cities that are part of the array passed as a parameter...
async function getWeather(citiesAndCountries, apiKey) {

    // Definition of the 'weather_data' array which will return all weather from all the cities contained in the 'citiesAndCountries' array...
    var weather_data = [];

    // Browse the 'cities' table containing all the names of all the cities for which the weather forecast is requested...
    for (var city in citiesAndCountries) {

        // Configuring the URL for using the Openweathermap API to launch the weather retrieval request for the current city...
        var weather_url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, ",", citiesAndCountries[city], "&appid=", apiKey);

        // Definition of bloc 'try' to define the code which should execute normally without any error...
        try {

            // Establishment and execution of the request thanks to 'axios'...
            var response_body = await axios(weather_url);

            // Definition of the 'openWeather' structure which contains all the data concerning the current city...
            var openWeather = {

                // Weather section...
                longitude: response_body.data.coord.lon,
                latitude: response_body.data.coord.lat,
                weather_id: response_body.data.weather[0].id,
                weather_main: response_body.data.weather[0].main,
                weather_description: response_body.data.weather[0].description,
                weather_icon: "https://openweathermap.org/img/wn/".concat(response_body.data.weather[0].icon, ".png"),
                base: response_body.data.base,
                main_temp: response_body.data.main.temp,
                main_feels_like: response_body.data.main.feels_like,
                main_temp_min: response_body.data.main.temp_min,
                main_temp_max: response_body.data.main.temp_max,
                main_pressure: response_body.data.main.pressure,
                main_humidity: response_body.data.main.humidity,
                visibility: response_body.data.visibility,
                wind_speed: response_body.data.wind.speed,
                wind_deg: response_body.data.wind.deg,
                clouds_all: response_body.data.clouds.all,
                dt: response_body.data.dt,
                sys_type: response_body.data.sys.type,
                sys_id: response_body.data.sys.id,
                sys_country: response_body.data.sys.country,
                sys_sunrise: response_body.data.sys.sunrise,
                sys_sunset: response_body.data.sys.sunset,
                timezone: response_body.data.timezone,
                city: response_body.data.name,
                id: response_body.data.id,
                cod: response_body.data.cod,

                // Ultraviolet section...
                uv_date_iso: "",
                uv_date: "",
                uv_value: ""
            };

            // Configuring the URL for using the Openweathermap API to launch the ultraviolet retrieval request for latitude and longitude for the current weather with API key...
            var ultraviolet_url = "http://api.openweathermap.org/data/2.5/uvi?lat=".concat(openWeather.latitude, "&lon=", openWeather.longitude, "&appid=", apiKey);

            // Establishment and execution of the request thanks to 'axios'...
            var response_body = await axios(ultraviolet_url);

            // Completion of the current weather with all UV datas...
            openWeather.uv_date_iso = response_body.data.date_iso;
            openWeather.uv_date = response_body.data.date;
            openWeather.uv_value = response_body.data.value;

            // Push in the array...
            weather_data.push(openWeather);

        // Definition of bloc 'catch' to catch any occured error...
        } catch(weatherProcessError) {

            // Implementation of the 'weatherError' structure which contains all the data concerning the occured error from openWeather...
            var weatherError = {

                cod: weatherProcessError.response.data.cod,
                message: weatherProcessError.response.data.message,
            };

            //Push in the array...
            weather_data.push(weatherError);
        }
    }

    // Returns the 'weather_data' array for display in the web application template...
    return weather_data;
}

getWeather(citiesAndCountries, apiKey).then(function(results) {

            var weather_data = {weather_data : results};

            console.log(weather_data);
});