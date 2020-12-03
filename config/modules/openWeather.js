var axios = require('axios');

var cities = ["Paris", "Oslo", "Yerevan"];
var apiKey = "5222a1c311ca31001b0877137d584c36";

async function getWeather(cities, apiKey) {
    var weather_data = [];

    for (var city of cities) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=", apiKey);

        var response_body = await axios(url);

        var openWeather = {
            city : response_body.data.name,
            description: response_body.data.weather[0].description,
            icon: "https://openweathermap.org/img/wn/".concat(response_body.data.weather[0].icon, ".png")
        };

        weather_data.push(openWeather);
    }

    return weather_data;
}

getWeather(cities, apiKey).then(function(results) {

            var weather_data = {weather_data : results};

            console.log(weather_data);
});