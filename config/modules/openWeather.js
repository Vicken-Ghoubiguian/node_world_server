var axios = require('axios');

var cities = ["Paris", "Oslo", "Yerevan"];
var apiKey = "5222a1c311ca31001b0877137d584c36";

async function getWeather(cities, apiKey) {
    var weather_data = [];

    for (var city of cities) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=", apiKey);

        var response_body = await axios(url);
		//var weather_json = JSON.parse(response_body);

        /*var weather = {
            city : weather_json.name,
            temperature : Math.round(weather_json.main.temp),
            description : weather_json.weather[0].description,
            icon : weather_json.weather[0].icon
        };*/

        weather_data.push(response_body.data);
    }

    return weather_data;
}

getWeather(cities, apiKey).then(function(results) {

            var weather_data = {weather_data : results};

            console.log(weather_data);
});