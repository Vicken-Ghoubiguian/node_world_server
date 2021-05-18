//
var axios = require('axios');

// Definition of the 'temperatureConversionFunction' function to convert the 'temperatureValue' temperature value in a current 'currentTemperatureUnit' unit in the wished 'wishedTemperatureUnit' unit...
function temperatureConversionFunction(temperatureValue, wishedTemperatureUnit, currentTemperatureUnit = "Kelvin") {

    var convertedTemperatureValue;

    // 'switch' instruction to treat all cases about 'currentTemperatureUnit' value...
    switch(currentTemperatureUnit) {

        // In the case where 'Celsius' is passed as 'currentTemperatureUnit' value...
        case "Celsius":

            // 'switch' instruction to treat all cases about 'wishedTemperatureUnit' value...
            switch(wishedTemperatureUnit) {

                // In the case where 'Celsius' is passed as 'wishedTemperatureUnit' value...
                case "Celsius": 

                    console.log("\x1b[31m" + "Temperature already in Celsius (°C)..." + "\x1b[0m");

                    convertedTemperatureValue = temperatureValue;

                    break;

                // In the case where 'Fahrenheit' is passed as 'wishedTemperatureUnit' value...
                case "Fahrenheit": 

                    // Conversion of temperature to 'Fahrenheit'...
                    convertedTemperatureValue = temperatureValue * (9/5); 
                    convertedTemperatureValue = convertedTemperatureValue + 32;
                    convertedTemperatureValue = convertedTemperatureValue.toFixed(2);

                    console.log("\x1b[32m" + "Temperature converted successfully in Fahrenheit (°F)..." + "\x1b[0m");

                    break;

                // In the case where 'Kelvin' is passed as 'wishedTemperatureUnit' value...
                case "Kelvin": 

                    // Conversion of temperature to 'Kelvin'...
                    convertedTemperatureValue = temperatureValue + 273.15;
                    convertedTemperatureValue = convertedTemperatureValue.toFixed(2);

                    console.log("\x1b[32m" + "Temperature converted successfully in Kelvin (K)..." + "\x1b[0m");

                    break;

                // In the case where anything else is passed as 'wishedTemperatureUnit' value...
                default: 

                    console.log("\x1b[31m" + "Unknown wished temperature unit..." + "\x1b[0m");

                    convertedTemperatureValue = temperatureValue;

                    break; 
            }

            break;

        // In the case where 'Fahrenheit' is passed as 'currentTemperatureUnit' value...
        case "Fahrenheit":

            // 'switch' instruction to treat all cases about 'wishedTemperatureUnit' value...
            switch(wishedTemperatureUnit) {

                // In the case where 'Celsius' is passed as 'wishedTemperatureUnit' value...
                case "Celsius": 

                    // Conversion of temperature to 'Celsius'...
                    convertedTemperatureValue = temperatureValue - 32; 
                    convertedTemperatureValue = convertedTemperatureValue * (5.0/9.0);
                    convertedTemperatureValue = convertedTemperatureValue.toFixed(2);

                    console.log("\x1b[32m" + "Temperature converted successfully in Celsius (°C)..." + "\x1b[0m");

                    break;

                // In the case where 'Fahrenheit' is passed as 'wishedTemperatureUnit' value...
                case "Fahrenheit": 

                    console.log("\x1b[31m" + "Temperature already in Fahrenheit (°F)..." + "\x1b[0m");

                    convertedTemperatureValue = temperatureValue;

                    break;

                // In the case where 'Kelvin' is passed as 'wishedTemperatureUnit' value...
                case "Kelvin": 

                    // Conversion of temperature to 'Kelvin'... 
                    convertedTemperatureValue = temperatureValue - 32;
                    convertedTemperatureValue = convertedTemperatureValue * (5/9);
                    convertedTemperatureValue = convertedTemperatureValue+ 273.15;
                    convertedTemperatureValue = convertedTemperatureValue.toFixed(2);

                    console.log("\x1b[32m" + "Temperature converted successfully in Kelvin (K)..." + "\x1b[0m");

                    break;

                // In the case where anything else is passed as 'wishedTemperatureUnit' value...
                default:

                    console.log("\x1b[31m" + "Unknown wished temperature unit..." + "\x1b[0m");

                    convertedTemperatureValue = temperatureValue;

                    break; 
            }

            break;

        // In the case where 'Kelvin' is passed as 'currentTemperatureUnit' value...
        case "Kelvin":

            // 'switch' instruction to treat all cases about 'wishedTemperatureUnit' value...
            switch(wishedTemperatureUnit) {

                // In the case where 'Celsius' is passed as 'wishedTemperatureUnit' value...
                case "Celsius":

                    //
                    convertedTemperatureValue = temperatureValue - 273.15;
                    convertedTemperatureValue = convertedTemperatureValue.toFixed(2);

                    console.log("\x1b[32m" + "Temperature converted successfully in Celsius (°C)..." + "\x1b[0m");

                    break;

                // In the case where 'Fahrenheit' is passed as 'wishedTemperatureUnit' value...
                case "Fahrenheit":

                    // Conversion of temperature to 'Fahrenheit'...
                    convertedTemperatureValue = (temperatureValue - 273.15);
                    convertedTemperatureValue = convertedTemperatureValue * (9/5);
                    convertedTemperatureValue = convertedTemperatureValue + 32;
                    convertedTemperatureValue = convertedTemperatureValue.toFixed(2);

                    console.log("\x1b[32m" + "Temperature converted successfully in Fahrenheit (°F)..." + "\x1b[0m");

                    break;

                // In the case where 'Kelvin' is passed as 'wishedTemperatureUnit' value...
                case "Kelvin": 

                    console.log("\x1b[31m" + "Temperature already in Kelvin (K)..." + "\x1b[0m");

                    convertedTemperatureValue = temperatureValue;

                    break;

                // In the case where anything else is passed as 'wishedTemperatureUnit' value...
                default:

                    console.log("\x1b[31m" + "Unknown wished temperature unit..." + "\x1b[0m");

                    convertedTemperatureValue = temperatureValue;

                    break; 
            }

            break;

        // In the case where anything else is passed as 'currentTemperatureUnit' value...
        default:

            console.log("\x1b[31m" + "Unknown current temperature scale..." + "\x1b[0m");

            convertedTemperatureValue = temperatureValue;

            break;
    }

    // Returning the converted temperature value...
    return convertedTemperatureValue;
}

// Definition of the 'pressureConversionFunction' function to convert the 'pressureValue' pressure value in a current 'currentPressureUnit' unit in the wished 'wishedPressureUnit' unit...
function pressureConversionFunction(pressureValue, wishedPressureUnit, currentPressureUnit = "HectoPascal") {

    var convertedPressureValue;

    // 'switch' instruction to treat all cases about 'currentPressureUnit' value...
    switch(currentPressureUnit) {

        // In the case where 'HectoPascal' is passed as 'currentPressureUnit' value...
        case "HectoPascal":

            // 'switch' instruction to treat all cases about 'wishedPressureUnit' value...
            switch(wishedPressureUnit) {

                // In the case where 'HectoPascal' is passed as 'wishedTemperatureUnit' value...
                case "HectoPascal": 

                    console.log("\x1b[31m" + "Temperature already in HectoPascal (hPa)..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;

                // In the case where 'Pascal' is passed as 'wishedTemperatureUnit' value...
                case "Pascal": 

                    convertedPressureValue = pressureValue * 100;

                    console.log("\x1b[32m" + "Pressure converted successfully in Pascal (Pa)..." + "\x1b[0m");

                    break;

                // In the case where 'Bar' is passed as 'wishedTemperatureUnit' value...
                case "Bar": 

                    convertedPressureValue = pressureValue / 1000;

                    console.log("\x1b[32m" + "Pressure converted successfully in Bar (bar)..." + "\x1b[0m");

                    break;

                // In the case where 'Atmosphere' is passed as 'wishedTemperatureUnit' value...
                case "Atmosphere": 

                    convertedPressureValue = pressureValue / 1013.25;

                    console.log("\x1b[32m" + "Pressure converted successfully in Atmosphere (atm)..." + "\x1b[0m");

                    break;

                // In the case where 'Torr' is passed as 'wishedTemperatureUnit' value...
                case "Torr": 

                    convertedPressureValue = pressureValue / 1.3332236842;

                    console.log("\x1b[32m" + "Pressure converted successfully in Torr (torr)..." + "\x1b[0m");

                    break;

                // In the case where 'PoundsPerSquareInch' is passed as 'wishedTemperatureUnit' value...
                case "PoundsPerSquareInch": 

                    convertedPressureValue = pressureValue / 68.94757293168;

                    console.log("\x1b[32m" + "Pressure converted successfully in PoundsPerSquareInch (Psi)..." + "\x1b[0m");

                    break;

                // In the case where anything else is passed as 'wishedPressureUnit' value...
                default: 

                    console.log("\x1b[31m" + "Unknown wished pressure unit..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;
            }

            break;

        // In the case where 'Pascal' is passed as 'currentPressureUnit' value...
        case "Pascal":

            // 'switch' instruction to treat all cases about 'wishedPressureUnit' value...
            switch(wishedPressureUnit) {

                // In the case where 'HectoPascal' is passed as 'wishedTemperatureUnit' value...
                case "HectoPascal": 

                    convertedPressureValue = pressureValue / 100;

                    console.log("\x1b[31m" + "Temperature converted successfully in HectoPascal (hPa)..." + "\x1b[0m");

                    break;

                // In the case where 'Pascal' is passed as 'wishedTemperatureUnit' value...
                case "Pascal": 

                    console.log("\x1b[31m" + "Temperature already in Pascal (Pa)..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;

                // In the case where 'Bar' is passed as 'wishedTemperatureUnit' value...
                case "Bar": 

                    convertedPressureValue = pressureValue / 100000;

                    console.log("\x1b[32m" + "Pressure converted successfully in Bar (bar)..." + "\x1b[0m");

                    break;

                // In the case where 'Atmosphere' is passed as 'wishedTemperatureUnit' value...
                case "Atmosphere": 

                    convertedPressureValue = pressureValue / 101325;

                    console.log("\x1b[32m" + "Pressure converted successfully in Atmosphere (atm)..." + "\x1b[0m");

                    break;

                // In the case where 'Torr' is passed as 'wishedTemperatureUnit' value...
                case "Torr": 

                    convertedPressureValue = pressureValue / 133.3223684211;

                    console.log("\x1b[32m" + "Pressure converted successfully in Torr (torr)..." + "\x1b[0m");

                    break;

                // In the case where 'PoundsPerSquareInch' is passed as 'wishedTemperatureUnit' value...
                case "PoundsPerSquareInch": 

                    convertedPressureValue = pressureValue / 6894.757293168;

                    console.log("\x1b[32m" + "Pressure converted successfully in PoundsPerSquareInch (Psi)..." + "\x1b[0m");

                    break;

                // In the case where anything else is passed as 'wishedPressureUnit' value...
                default: 

                    console.log("\x1b[31m" + "Unknown wished pressure unit..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;
            }

            break;

        // In the case where 'Bar' is passed as 'currentPressureUnit' value...
        case "Bar":

            // 'switch' instruction to treat all cases about 'wishedPressureUnit' value...
            switch(wishedPressureUnit) {

                // In the case where 'HectoPascal' is passed as 'wishedTemperatureUnit' value...
                case "HectoPascal": 

                    convertedPressureValue = pressureValue * 1000;

                    console.log("\x1b[31m" + "Temperature converted successfully in HectoPascal (hPa)..." + "\x1b[0m");

                    break;

                // In the case where 'Pascal' is passed as 'wishedTemperatureUnit' value...
                case "Pascal": 

                    convertedPressureValue = pressureValue * 100000;

                    console.log("\x1b[31m" + "Temperature converted successfully in Pascal (Pa)..." + "\x1b[0m");

                    break;

                // In the case where 'Bar' is passed as 'wishedTemperatureUnit' value...
                case "Bar": 

                    console.log("\x1b[31m" + "Temperature already in Bar (bar)..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;

                // In the case where 'Atmosphere' is passed as 'wishedTemperatureUnit' value...
                case "Atmosphere": 

                    convertedPressureValue = pressureValue / 1.01325;

                    console.log("\x1b[32m" + "Pressure converted successfully in Atmosphere (atm)..." + "\x1b[0m");

                    break;

                // In the case where 'Torr' is passed as 'wishedTemperatureUnit' value...
                case "Torr": 

                    convertedPressureValue = pressureValue * 750.061682704;

                    console.log("\x1b[32m" + "Pressure converted successfully in Torr (torr)..." + "\x1b[0m");

                    break;

                // In the case where 'PoundsPerSquareInch' is passed as 'wishedTemperatureUnit' value...
                case "PoundsPerSquareInch": 

                    convertedPressureValue = pressureValue * 14.503773773022;

                    console.log("\x1b[32m" + "Pressure converted successfully in PoundsPerSquareInch (Psi)..." + "\x1b[0m");

                    break;

                // In the case where anything else is passed as 'wishedPressureUnit' value...
                default: 

                    console.log("\x1b[31m" + "Unknown wished pressure unit..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;
            }

            break;

        // In the case where 'Atmosphere' is passed as 'currentPressureUnit' value...
        case "Atmosphere": 

            // 'switch' instruction to treat all cases about 'wishedPressureUnit' value...
            switch(wishedPressureUnit) {

                // In the case where 'HectoPascal' is passed as 'wishedTemperatureUnit' value...
                case "HectoPascal": 

                    convertedPressureValue = pressureValue * 1013.2501;

                    console.log("\x1b[32m" + "Pressure converted successfully in HectoPascal (hPa)..." + "\x1b[0m");

                    break;

                // In the case where 'Pascal' is passed as 'wishedTemperatureUnit' value...
                case "Pascal": 

                    convertedPressureValue = pressureValue * 101325;

                    console.log("\x1b[32m" + "Pressure converted successfully in Pascal (Pa)..." + "\x1b[0m");

                    break;

                // In the case where 'Bar' is passed as 'wishedTemperatureUnit' value...
                case "Bar": 

                    convertedPressureValue = pressureValue * 1.01325;

                    console.log("\x1b[32m" + "Pressure converted successfully in Bar (bar)..." + "\x1b[0m");

                    break;

                // In the case where 'Atmosphere' is passed as 'wishedTemperatureUnit' value...
                case "Atmosphere": 

                    console.log("\x1b[31m" + "Temperature already in Atmosphere (atm)..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;

                // In the case where 'Torr' is passed as 'wishedTemperatureUnit' value...
                case "Torr": 

                    convertedPressureValue = pressureValue * 760;

                    console.log("\x1b[32m" + "Pressure converted successfully in Torr (torr)..." + "\x1b[0m");

                    break;

                // In the case where 'PoundsPerSquareInch' is passed as 'wishedTemperatureUnit' value...
                case "PoundsPerSquareInch": 

                    convertedPressureValue = pressureValue * 14.695964;

                    console.log("\x1b[32m" + "Pressure converted successfully in PoundsPerSquareInch (Psi)..." + "\x1b[0m");

                    break;

                // In the case where anything else is passed as 'wishedPressureUnit' value...
                default: 

                    console.log("\x1b[31m" + "Unknown wished pressure unit..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;
            }

            break;

        // In the case where 'Torr' is passed as 'currentPressureUnit' value...
        case "Torr": 

            // 'switch' instruction to treat all cases about 'wishedPressureUnit' value...
            switch(wishedPressureUnit) {

                // In the case where 'HectoPascal' is passed as 'wishedTemperatureUnit' value...
                case "HectoPascal":

                    convertedPressureValue = pressureValue * 1.333223684211;

                    console.log("\x1b[32m" + "Pressure converted successfully in HectoPascal (hPa)..." + "\x1b[0m");

                    break;

                // In the case where 'Pascal' is passed as 'wishedTemperatureUnit' value...
                case "Pascal": 

                    convertedPressureValue = pressureValue * 133.3223684211;

                    console.log("\x1b[32m" + "Pressure converted successfully in Pascal (Pa)..." + "\x1b[0m");

                    break;

                // In the case where 'Bar' is passed as 'wishedTemperatureUnit' value...
                case "Bar": 

                    convertedPressureValue = pressureValue / 750.06375541921;

                    console.log("\x1b[32m" + "Pressure converted successfully in Bar (bar)..." + "\x1b[0m");

                    break;

                // In the case where 'Atmosphere' is passed as 'wishedTemperatureUnit' value...
                case "Atmosphere": 

                    convertedPressureValue = pressureValue / 760;

                    console.log("\x1b[31m" + "Temperature converted successfully in Atmosphere (atm)..." + "\x1b[0m");

                    break;

                // In the case where 'Torr' is passed as 'wishedTemperatureUnit' value...
                case "Torr": 

                    console.log("\x1b[31m" + "Temperature already in Torr (torr)..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;

                // In the case where 'PoundsPerSquareInch' is passed as 'wishedTemperatureUnit' value...
                case "PoundsPerSquareInch": 

                    convertedPressureValue = pressureValue / 51.715;

                    console.log("\x1b[32m" + "Pressure converted successfully in PoundsPerSquareInch (Psi)..." + "\x1b[0m");

                    break;

                // In the case where anything else is passed as 'wishedPressureUnit' value...
                default:

                    console.log("\x1b[31m" + "Unknown wished pressure unit..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;
            }

            break;

        // In the case where 'PoundsPerSquareInch' is passed as 'currentPressureUnit' value...
        case "PoundsPerSquareInch":

            // 'switch' instruction to treat all cases about 'wishedPressureUnit' value...
            switch(wishedPressureUnit) {

                // In the case where 'HectoPascal' is passed as 'wishedTemperatureUnit' value...
                case "HectoPascal": 

                    convertedPressureValue = pressureValue * 68.9475729318;

                    console.log("\x1b[32m" + "Pressure converted successfully in HectoPascal (hPa)..." + "\x1b[0m");

                    break;

                // In the case where 'Pascal' is passed as 'wishedTemperatureUnit' value...
                case "Pascal":

                    convertedPressureValue = pressureValue * 6894.7572931783;

                    console.log("\x1b[32m" + "Pressure converted successfully in Pascal (Pa)..." + "\x1b[0m");

                    break;

                // In the case where 'Bar' is passed as 'wishedTemperatureUnit' value...
                case "Bar":

                    convertedPressureValue = pressureValue / 14.5037738;

                    console.log("\x1b[32m" + "Pressure converted successfully in Bar (bar)..." + "\x1b[0m");

                    break;

                // In the case where 'Atmosphere' is passed as 'wishedTemperatureUnit' value...
                case "Atmosphere":

                    convertedPressureValue = pressureValue / 14.696;

                    console.log("\x1b[31m" + "Temperature converted successfully in Atmosphere (atm)..." + "\x1b[0m");

                    break;

                // In the case where 'Torr' is passed as 'wishedTemperatureUnit' value...
                case "Torr":

                    convertedPressureValue = pressureValue * 51.715;

                    console.log("\x1b[31m" + "Temperature converted successfully in Torr (torr)..." + "\x1b[0m");

                    break;

                // In the case where 'PoundsPerSquareInch' is passed as 'wishedTemperatureUnit' value...
                case "PoundsPerSquareInch": 

                    console.log("\x1b[31m" + "Temperature already in PoundsPerSquareInch (Psi)..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;

                // In the case where anything else is passed as 'wishedPressureUnit' value...
                default: 

                    console.log("\x1b[31m" + "Unknown wished pressure unit..." + "\x1b[0m");

                    convertedPressureValue = pressureValue;

                    break;
            }

            break;

        // In the case where anything else is passed as 'currentPressureUnit' value...
        default:

            console.log("\x1b[31m" + "Unknown current pressure scale..." + "\x1b[0m");

            convertedTemperatureValue = temperatureValue;

            break;        
    }

    // Returning the converted pressure value...
    return convertedPressureValue;
}

// Definition of the 'dateAndTimeFormatConversionFunction' function to convert and return dateAndTime from a timestamp to a wished 'wishedDateAndTimeFormat' format...
function dateAndTimeFormatConversionFunction(dateAndTime, timezone, wishedDateAndTimeFormat = "timestamp") {

    var convertedDateAndTime;

    //
    dateAndTime = (dateAndTime + timezone) * 1000;

    // If the wished date and time is "timestamp"... 
    if(wishedDateAndTimeFormat != "timestamp") {

        // Conversion of 'dateAndTime' timestamp as a JS Date object...
        var dateAndTimeASJSDate = new Date(dateAndTime);

        // If the number of date is less than 9 or equal to 9, so...
        if(dateAndTimeASJSDate.getUTCDate() <= 9) {

            // A '0' is added to the final value of date...
            var date = "0" + dateAndTimeASJSDate.getUTCDate();

        // Else...
        } else {

            // The final value of date is ready...
            var date = dateAndTimeASJSDate.getUTCDate();
        }

        //
        var month = dateAndTimeASJSDate.getUTCMonth() + 1;

        // If the number of month is less than 9 or equal to 9, so...
        if(month <= 9) {

            // A '0' is added to the final value of month...
            month = "0" + month;
        }

        // The final value of year is ready...
        var year = dateAndTimeASJSDate.getUTCFullYear();

        // If the number of hours is less than 9 or equal to 9, so...
        if(dateAndTimeASJSDate.getUTCHours() <= 9) {

            // A '0' is added to the final value of hours...
            var hours = "0" + dateAndTimeASJSDate.getUTCHours();

        // Else...
        } else {

            // The final value of hours is ready...
            var hours = dateAndTimeASJSDate.getUTCHours();
        }

        // If the number of minutes is less than 9 or equal to 9, so...
        if(dateAndTimeASJSDate.getUTCMinutes() <= 9) {

            // A '0' is added to the final value of minutes...
            var minutes = "0" + dateAndTimeASJSDate.getUTCMinutes();

        // Else...
        } else {

            // The final value of minutes is ready...
            var minutes = dateAndTimeASJSDate.getUTCMinutes();
        }

        // If the number of seconds is less than 9 or equal to 9, so...
        if(dateAndTimeASJSDate.getUTCSeconds() <= 9) {

            // A '0' is added to the final value of seconds...
            var secondes = "0" + dateAndTimeASJSDate.getUTCSeconds();

        // Else...
        } else {

            // The final value of seconds is ready...
            var secondes = dateAndTimeASJSDate.getUTCSeconds();
        }

        // In the case "DMYHMS" is choosen as wished date and time format...
        if(wishedDateAndTimeFormat === "DMYHMS") {

            // Affectation of 'dateAndTime''s time to 'convertedDateAndTime'...
            convertedDateAndTime = date + "/" + month + "/" + year + " " + hours + ":" + minutes +  ":" + secondes;

        // In the case "YMDHMS" is choosen as wished date and time format...
        } else if(wishedDateAndTimeFormat === "YMDHMS") {

            // Affectation of 'dateAndTime''s time to 'convertedDateAndTime'...
            convertedDateAndTime = year + "/" + month + "/" + date + " " + hours + ":" + minutes +  ":" + secondes;

        // In the case "MDYHMS" is choosen as wished date and time format...
        } else if(wishedDateAndTimeFormat === "MDYHMS") {

            // Affectation of 'dateAndTime''s time to 'convertedDateAndTime'...
            convertedDateAndTime = month + "/" + date + "/" + year + " " + hours + ":" + minutes +  ":" + secondes;

        // Else...
        } else {

            // Message to tell some things in the console...
            console.log("\x1b[31m" + "Unknown format, so the date and the time are kept as timestamp..." + "\x1b[0m");

            // Affectation of 'dateAndTime' to 'convertedDateAndTime'...
            convertedDateAndTime = dateAndTime;
        }

    // Else...
    } else {

        // Message to tell some things in the console...
        console.log("\x1b[31m" + "Date and time already in timestamp..." + "\x1b[0m");

        // Affectation of 'dateAndTime' to 'convertedDateAndTime'...
        convertedDateAndTime = dateAndTime;
    }

    // Returning the converted date and time (datetime)...
    return convertedDateAndTime;
}

// Definition of the 'getUVRisk' function to determine and return the UV risk from the 'uvValue' value...
function getUVRisk(uvValue) {

    var determiedUVRisk = "";

    // if the UV index is less than or equal to 2 then the risk is low, so...
    if (uvValue <= 2) {

        determiedUVRisk = "low";

    //
    } else if (3 <= uvValue && uvValue <= 5) {

        determiedUVRisk = "moderate";

    //
    } else if (6 <= uvValue && uvValue <= 7) {

        determiedUVRisk = "high";

    //
    } else if (8 <= uvValue && uvValue <= 10) {

        determiedUVRisk = "very high";

    // else: the UV index is greater than 10, therefore extreme...
    } else {

        determiedUVRisk = "extreme";
    }

    // Returning the determined UV risk...
    return determiedUVRisk;
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
            var response_body = await axios.post(weather_url);

            // Definition of the 'openWeatherAsJSON' variable which contains all the data concerning the current city in the JSON format...
            var openWeatherAsJSON = {

                // All-Weather section...
                longitude: response_body.data.coord.lon,
                latitude: response_body.data.coord.lat,
                weather_id: response_body.data.weather[0].id,
                weather_main: response_body.data.weather[0].main,
                weather_description: response_body.data.weather[0].description,
                weather_icon: "https://openweathermap.org/img/wn/".concat(response_body.data.weather[0].icon, "@2x.png"),
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
                uv_value: "",
                uv_risk: ""
            };

            // Configuring the URL for using the Openweathermap API to launch the ultraviolet retrieval request for latitude and longitude for the current weather with API key...
            var ultraviolet_url = "http://api.openweathermap.org/data/2.5/uvi?lat=".concat(openWeatherAsJSON.latitude, "&lon=", openWeatherAsJSON.longitude, "&appid=", apiKey);

            // Establishment and execution of the request thanks to 'axios'...
            var response_body = await axios(ultraviolet_url);

            // Completion of the current weather with all UV datas...
            openWeatherAsJSON.uv_date_iso = response_body.data.date_iso;
            openWeatherAsJSON.uv_date = response_body.data.date;
            openWeatherAsJSON.uv_value = Math.round(response_body.data.value);
            openWeatherAsJSON.uv_risk = getUVRisk(Math.round(response_body.data.value));

            // Push in the array...
            weather_data.push(openWeatherAsJSON);

        // Definition of bloc 'catch' to catch any occured error...
        } catch(weatherProcessError) {

            // In the case there are a 'data' filed in the 'response' field in the 'weatherProcessError' raised error, so...
            if('response.data' in weatherProcessError) {

                // Implementation of the 'openWeatherAsJSON' structure which contains all the data concerning the occured error from openWeather...
                var openWeatherAsJSON = {

                    cod: weatherProcessError.response.data.cod,
                    message: weatherProcessError.response.data.message,
                };

                //Push in the array...
                weather_data.push(openWeatherAsJSON);

            // In the other case...
            } else {

                // The 'weatherProcessError' raised error is thrown...
                throw weatherProcessError;
            }
        }
    }

    // Returns the 'weather_data' array for display in the web application template...
    return weather_data;
}

// Export all defined functions to get and treat weather datas...
module.exports = {

        'getWeather': getWeather,
        'dateAndTimeFormatConversionFunction': dateAndTimeFormatConversionFunction,
        'pressureConversionFunction': pressureConversionFunction,
        'temperatureConversionFunction': temperatureConversionFunction
}
