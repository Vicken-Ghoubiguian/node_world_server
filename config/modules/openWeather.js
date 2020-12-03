var axios = require('axios');

var cities = ["Paris", "Oslo", "Yerevan"];
var apiKey = "5222a1c311ca31001b0877137d584c36";

async function getWeather(cities, apiKey) {
    var weather_data = [];

    for (var city of cities) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=", apiKey);

        var response_body = await axios(url);

        var openWeather = {

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
            cod: response_body.data.cod
        };

        weather_data.push(openWeather);
    }

    return weather_data;
}

getWeather(cities, apiKey).then(function(results) {

            var weather_data = {weather_data : results};

            console.log(weather_data);
});