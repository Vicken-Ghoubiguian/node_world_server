//
var moment = require('moment-timezone');

// Array containing all timezones with relatives datas...
var timezones = [

	//Universal and conventional timezones...
	{timezone: "Etc/UTC", country_code: "NaNC", weather_reference: "UTC", moment: moment.tz("Etc/UTC"), color: "#1c4966"},
	{timezone: "Etc/GMT", country_code: "NaNC", weather_reference: "GMT", moment: moment.tz("Etc/GMT"), color: "#1c4966"},

	//African timezones...
	{timezone: "Africa/Abidjan", country_code: "CI", weather_reference: "Abidjan", moment: moment.tz("Africa/Abidjan"), color: "#ffdf00"},
	{timezone: "Africa/Accra", country_code: "GH", weather_reference: "Accra", moment: moment.tz("Africa/Accra"), color: "#ffdf00"},
	{timezone: "Africa/Addis_Ababa", country_code: "ET", weather_reference: "Addis Ababa", moment: moment.tz("Africa/Addis_Ababa"), color: "#ffdf00"},
	{timezone: "Africa/Algiers", country_code: "DZ", weather_reference: "Algiers", moment: moment.tz("Africa/Algiers"), color: "#ffdf00"},
	{timezone: "Africa/Asmara", country_code: "ER", weather_reference: "Asmara", moment: moment.tz("Africa/Asmara"), color: "#ffdf00"},
	{timezone: "Africa/Bamako", country_code: "ML", weather_reference: "Bamako", moment: moment.tz("Africa/Bamako"), color: "#ffdf00"},
	{timezone: "Africa/Bangui", country_code: "CF", weather_reference: "Bangui", moment: moment.tz("Africa/Bangui"), color: "#ffdf00"},
	{timezone: "Africa/Banjul", country_code: "GM", weather_reference: "Banjul", moment: moment.tz("Africa/Banjul"), color: "#ffdf00"},
	{timezone: "Africa/Bissau", country_code: "GW", weather_reference: "Bissau", moment: moment.tz("Africa/Bissau"), color: "#ffdf00"},
	{timezone: "Africa/Blantyre", country_code: "MW", weather_reference: "Blantyre", moment: moment.tz("Africa/Blantyre"), color: "#ffdf00"},
	{timezone: "Africa/Brazzaville", country_code: "CG", weather_reference: "Brazzaville", moment: moment.tz("Africa/Brazzaville"), color: "#ffdf00"},
	{timezone: "Africa/Bujumbura", country_code: "BI", weather_reference: "Bujumbura", moment: moment.tz("Africa/Bujumbura"), color: "#ffdf00"},
	{timezone: "Africa/Cairo", country_code: "EG", weather_reference: "Cairo", moment: moment.tz("Africa/Cairo"), color: "#ffdf00"},
	{timezone: "Africa/Casablanca", country_code: "MA", weather_reference: "Casablanca", moment: moment.tz("Africa/Casablanca"), color: "#ffdf00"},
	{timezone: "Africa/Ceuta", country_code: "ES", weather_reference: "Ceuta", moment: moment.tz("Africa/Ceuta"), color: "#ffdf00"},
	{timezone: "Africa/Conakry", country_code: "GN", weather_reference: "Conakry", moment: moment.tz("Africa/Conakry"), color: "#ffdf00"},
	{timezone: "Africa/Dakar", country_code: "SN", weather_reference: "Dakar", moment: moment.tz("Africa/Dakar"), color: "#ffdf00"},
	{timezone: "Africa/Dar_es_Salaam", country_code: "TZ", weather_reference: "Dar_es_Salaam", moment: moment.tz("Africa/Dar_es_Salaam"), color: "#ffdf00"},
	{timezone: "Africa/Djibouti", country_code: "DJ", weather_reference: "Djibouti", moment: moment.tz("Africa/Djibouti"), color: "#ffdf00"},
	{timezone: "Africa/Douala", country_code: "CM", weather_reference: "Douala", moment: moment.tz("Africa/Douala"), color: "#ffdf00"},
	{timezone: "Africa/El_Aaiun", country_code: "EH", weather_reference: "El_Aaiun", moment: moment.tz("Africa/El_Aaiun"), color: "#ffdf00"},
	{timezone: "Africa/Freetown", country_code: "SL", weather_reference: "Freetown", moment: moment.tz("Africa/Freetown"), color: "#ffdf00"},
	{timezone: "Africa/Gaborone", country_code: "BW", weather_reference: "Gaborone", moment: moment.tz("Africa/Gaborone"), color: "#ffdf00"},
	{timezone: "Africa/Harare", country_code: "ZW", weather_reference: "Harare", moment: moment.tz("Africa/Harare"), color: "#ffdf00"},
	{timezone: "Africa/Johannesburg", country_code: "ZA", weather_reference: "Johannesburg", moment: moment.tz("Africa/Johannesburg"), color: "#ffdf00"},
	{timezone: "Africa/Juba", country_code: "SS", weather_reference: "Juba", moment: moment.tz("Africa/Juba"), color: "#ffdf00"},
	{timezone: "Africa/Kampala", country_code: "UG", weather_reference: "Kampala", moment: moment.tz("Africa/Kampala"), color: "#ffdf00"},
	{timezone: "Africa/Khartoum", country_code: "SD", weather_reference: "Khartoum", moment: moment.tz("Africa/Khartoum"), color: "#ffdf00"},
	{timezone: "Africa/Kigali", country_code: "RW", weather_reference: "Kigali", moment: moment.tz("Africa/Kigali"), color: "#ffdf00"},
	{timezone: "Africa/Kinshasa", country_code: "CD", weather_reference: "Kinshasa", moment: moment.tz("Africa/Kinshasa"), color: "#ffdf00"},
	{timezone: "Africa/Lagos", country_code: "NG", weather_reference: "Lagos", moment: moment.tz("Africa/Lagos"), color: "#ffdf00"},
	{timezone: "Africa/Libreville", country_code: "GA", weather_reference: "Libreville", moment: moment.tz("Africa/Libreville"), color: "#ffdf00"},
	{timezone: "Africa/Lome", country_code: "TG", weather_reference: "Lome", moment: moment.tz("Africa/Lome"), color: "#ffdf00"},
	{timezone: "Africa/Luanda", country_code: "AO", weather_reference: "Luanda", moment: moment.tz("Africa/Luanda"), color: "#ffdf00"},
	{timezone: "Africa/Lubumbashi", country_code: "CD", weather_reference: "Lubumbashi", moment: moment.tz("Africa/Lubumbashi"), color: "#ffdf00"},
	{timezone: "Africa/Lusaka", country_code: "ZM", weather_reference: "Lusaka", moment: moment.tz("Africa/Lusaka"), color: "#ffdf00"},
	{timezone: "Africa/Malabo", country_code: "GQ", weather_reference: "Malabo", moment: moment.tz("Africa/Malabo"), color: "#ffdf00"},
	{timezone: "Africa/Maputo", country_code: "MZ", weather_reference: "Maputo", moment: moment.tz("Africa/Maputo"), color: "#ffdf00"},
	{timezone: "Africa/Maseru", country_code: "LS", weather_reference: "Maseru", moment: moment.tz("Africa/Maseru"), color: "#ffdf00"},
	{timezone: "Africa/Mbabane", country_code: "SZ", weather_reference: "Mbabane", moment: moment.tz("Africa/Mbabane"), color: "#ffdf00"},
	{timezone: "Africa/Mogadishu", country_code: "SO", weather_reference: "Mogadishu", moment: moment.tz("Africa/Mogadishu"), color: "#ffdf00"},
	{timezone: "Africa/Monrovia", country_code: "LR", weather_reference: "Monrovia", moment: moment.tz("Africa/Monrovia"), color: "#ffdf00"},
	{timezone: "Africa/Nairobi", country_code: "KE", weather_reference: "Nairobi", moment: moment.tz("Africa/Nairobi"), color: "#ffdf00"},
	{timezone: "Africa/Ndjamena", country_code: "TD", weather_reference: "Ndjamena", moment: moment.tz("Africa/Ndjamena"), color: "#ffdf00"},
	{timezone: "Africa/Niamey", country_code: "NE", weather_reference: "Niamey", moment: moment.tz("Africa/Niamey"), color: "#ffdf00"},
	{timezone: "Africa/Nouakchott", country_code: "MR", weather_reference: "Nouakchott", moment: moment.tz("Africa/Nouakchott"), color: "#ffdf00"},
	{timezone: "Africa/Ouagadougou", country_code: "BF", weather_reference: "Ouagadougou", moment: moment.tz("Africa/Ouagadougou"), color: "#ffdf00"},
	{timezone: "Africa/Porto-Novo", country_code: "BJ", weather_reference: "Porto-Novo", moment: moment.tz("Africa/Porto-Novo"), color: "#ffdf00"},
	{timezone: "Africa/Sao_Tome", country_code: "ST", weather_reference: "São Tomé", moment: moment.tz("Africa/Sao_Tome"), color: "#ffdf00"},
	{timezone: "Africa/Tripoli", country_code: "LY", weather_reference: "Tripoli", moment: moment.tz("Africa/Tripoli"), color: "#ffdf00"},
	{timezone: "Africa/Tunis", country_code: "TN", weather_reference: "Tunis", moment: moment.tz("Africa/Tunis"), color: "#ffdf00"},
	{timezone: "Africa/Windhoek", country_code: "NA", weather_reference: "Windhoek", moment: moment.tz("Africa/Windhoek"), color: "#ffdf00"},

	//Antarctican timezones...
	{timezone: "Antarctica/Casey", country_code: "AQ", weather_reference: "Casey", moment: moment.tz("Antarctica/Casey"), color: "#FFC0CB"},
	{timezone: "Antarctica/Davis", country_code: "AQ", weather_reference: "Davis", moment: moment.tz("Antarctica/Davis"), color: "#FFC0CB"},
	{timezone: "Antarctica/DumontDUrville", country_code: "AQ", weather_reference: "DumontDUrville", moment: moment.tz("Antarctica/DumontDUrville"), color: "#FFC0CB"},
	{timezone: "Antarctica/Macquarie", country_code: "AU", weather_reference: "Macquarie", moment: moment.tz("Antarctica/Macquarie"), color: "#FFC0CB"},
	{timezone: "Antarctica/Mawson", country_code: "AQ", weather_reference: "Mawson", moment: moment.tz("Antarctica/Mawson"), color: "#FFC0CB"},
	{timezone: "Antarctica/McMurdo", country_code: "AQ", weather_reference: "McMurdo", moment: moment.tz("Antarctica/McMurdo"), color: "#FFC0CB"},
	{timezone: "Antarctica/Palmer", country_code: "AQ", weather_reference: "Palmer", moment: moment.tz("Antarctica/Palmer"), color: "#FFC0CB"},
	{timezone: "Antarctica/Rothera", country_code: "AQ", weather_reference: "Rothera", moment: moment.tz("Antarctica/Rothera"), color: "#FFC0CB"},
	{timezone: "Antarctica/Syowa", country_code: "AQ", weather_reference: "Syowa", moment: moment.tz("Antarctica/Syowa"), color: "#FFC0CB"},
	{timezone: "Antarctica/Troll", country_code: "AQ", weather_reference: "Troll", moment: moment.tz("Antarctica/Troll"), color: "#FFC0CB"},
	{timezone: "Antarctica/Vostok", country_code: "AQ", weather_reference: "Vostok", moment: moment.tz("Antarctica/Vostok"), color: "#FFC0CB"},

	//Arctic ocean's timezones...
	{timezone: "Arctic/Longyearbyen", country_code: "SJ", weather_reference: "Longyearbyen", moment: moment.tz("Arctic/Longyearbyen"), color: "#FD6C9E"},

	//Asian timezones...
	{timezone: "Asia/Almaty", country_code: "KZ", weather_reference: "Almaty", moment: moment.tz("Asia/Almaty"), color: "#79F8F8"},
	{timezone: "Asia/Amman", country_code: "JO", weather_reference: "Amman", moment: moment.tz("Asia/Amman"), color: "##79F8F8"},
	{timezone: "Asia/Anadyr", country_code: "RU", weather_reference: "Anadyr", moment: moment.tz("Asia/Anadyr"), color: "##79F8F8"},
	{timezone: "Asia/Aqtau", country_code: "KZ", weather_reference: "Aktau", moment: moment.tz("Asia/Aqtau"), color: "#79F8F8"},
	{timezone: "Asia/Aqtobe", country_code: "KZ", weather_reference: "Aqtobe", moment: moment.tz("Asia/Aqtobe"), color: "#79F8F8"},
	{timezone: "Asia/Ashgabat", country_code: "TM", weather_reference: "Ashgabat", moment: moment.tz("Asia/Ashgabat"), color: "#79F8F8"},
	{timezone: "Asia/Atyrau", country_code: "KZ", weather_reference: "Atyrau", moment: moment.tz("Asia/Atyrau"), color: "#79F8F8"},

	//Atlantic ocean's timezones...
	{timezone: "Atlantic/Azores", country_code: "PT", weather_reference: "Azores", moment: moment.tz("Atlantic/Azores"), color: "#00FF00"},
	{timezone: "Atlantic/Bermuda", country_code: "BM", weather_reference: "Bermuda", moment: moment.tz("Atlantic/Bermuda"), color: "#00FF00"},
	{timezone: "Atlantic/Canary", country_code: "ES", weather_reference: "Canary", moment: moment.tz("Atlantic/Canary"), color: "#00FF00"},
	{timezone: "Atlantic/Cape_Verde", country_code: "CV", weather_reference: "Praia", moment: moment.tz("Atlantic/Cape_Verde"), color: "#00FF00"},
	{timezone: "Atlantic/Faroe", country_code: "FO", weather_reference: "Tórshavn", moment: moment.tz("Atlantic/Faroe"), color: "#00FF00"},
	{timezone: "Atlantic/Madeira", country_code: "PT", weather_reference: "Madeira", moment: moment.tz("Atlantic/Madeira"), color: "#00FF00"},
	{timezone: "Atlantic/Reykjavik", country_code: "IS", weather_reference: "Reykjavik", moment: moment.tz("Atlantic/Reykjavik"), color: "#00FF00"},
	{timezone: "Atlantic/South_Georgia", country_code: "GS", weather_reference: "Grytviken", moment: moment.tz("Atlantic/South_Georgia"), color: "#00FF00"},
	{timezone: "Atlantic/St_Helena", country_code: "SH", weather_reference: "Jamestown", moment: moment.tz("Atlantic/St_Helena"), color: "#00FF00"},
	{timezone: "Atlantic/Stanley", country_code: "FK", weather_reference: "Stanley", moment: moment.tz("Atlantic/Stanley"), color: "#00FF00"},

	//Australian timezones...
	{timezone: "Australia/Adelaide", country_code: "AU", weather_reference: "Adelaide", moment: moment.tz("Australia/Adelaide"), color: "#0091AD"},
	{timezone: "Australia/Brisbane", country_code: "AU", weather_reference: "Brisbane", moment: moment.tz("Australia/Brisbane"), color: "#0091AD"},
	{timezone: "Australia/Broken_Hill", country_code: "AU", weather_reference: "Broken_Hill", moment: moment.tz("Australia/Broken_Hill"), color: "#0091AD"},
	{timezone: "Australia/Currie", country_code: "AU", weather_reference: "Currie", moment: moment.tz("Australia/Currie"), color: "#0091AD"},
	{timezone: "Australia/Darwin", country_code: "AU", weather_reference: "Darwin", moment: moment.tz("Australia/Darwin"), color: "#0091AD"},
	{timezone: "Australia/Eucla", country_code: "AU", weather_reference: "Eucla", moment: moment.tz("Australia/Eucla"), color: "#0091AD"},
	{timezone: "Australia/Hobart", country_code: "AU", weather_reference: "Hobart", moment: moment.tz("Australia/Hobart"), color: "#0091AD"},
	{timezone: "Australia/Lindeman", country_code: "AU", weather_reference: "Lindeman", moment: moment.tz("Australia/Lindeman"), color: "#0091AD"},
	{timezone: "Australia/Lord_Howe", country_code: "AU", weather_reference: "Lord_Howe", moment: moment.tz("Australia/Lord_Howe"), color: "#0091AD"},
	{timezone: "Australia/Melbourne", country_code: "AU", weather_reference: "Melbourne", moment: moment.tz("Australia/Melbourne"), color: "#0091AD"},
	{timezone: "Australia/Perth", country_code: "AU", weather_reference: "Perth", moment: moment.tz("Australia/Perth"), color: "#0091AD"},
	{timezone: "Australia/Sydney", country_code: "AU", weather_reference: "Sydney", moment: moment.tz("Australia/Sydney"), color: "#0091AD"},

	//European timezones...
	{timezone: "Europe/Amsterdam", country_code: "NL", weather_reference: "Amsterdam", moment: moment.tz("Europe/Amsterdam"), color: "#006400"},
	{timezone: "Europe/Andorra", country_code: "AD", weather_reference: "Andorra", moment: moment.tz("Europe/Andorra"), color: "#006400"},
	{timezone: "Europe/Astrakhan", country_code: "RU", weather_reference: "Astrakhan", moment: moment.tz("Europe/Astrakhan"), color: "#006400"},
	{timezone: "Europe/Athens", country_code: "GR", weather_reference: "Athens", moment: moment.tz("Europe/Athens"), color: "#006400"},
	{timezone: "Europe/Belgrade", country_code: "RS", weather_reference: "Belgrade", moment: moment.tz("Europe/Belgrade"), color: "#006400"},
	{timezone: "Europe/Berlin", country_code: "DE", weather_reference: "Berlin", moment: moment.tz("Europe/Berlin"), color: "#006400"},
	{timezone: "Europe/Bratislava", country_code: "SK", weather_reference: "Bratislava", moment: moment.tz("Europe/Bratislava"), color: "#006400"},
	{timezone: "Europe/Brussels", country_code: "BE", weather_reference: "Brussels", moment: moment.tz("Europe/Brussels"), color: "#006400"},
	{timezone: "Europe/Bucharest", country_code: "RO", weather_reference: "Bucharest", moment: moment.tz("Europe/Bucharest"), color: "#006400"},
	{timezone: "Europe/Budapest", country_code: "HU", weather_reference: "Budapest", moment: moment.tz("Europe/Budapest"), color: "#006400"},
	{timezone: "Europe/Busingen", country_code: "DE", weather_reference: "Busingen", moment: moment.tz("Europe/Busingen"), color: "#006400"},
	{timezone: "Europe/Chisinau", country_code: "MD", weather_reference: "Chisinau", moment: moment.tz("Europe/Chisinau"), color: "#006400"},
	{timezone: "Europe/Copenhagen", country_code: "DK", weather_reference: "Copenhagen", moment: moment.tz("Europe/Copenhagen"), color: "#006400"},
	{timezone: "Europe/Dublin", country_code: "IE", weather_reference: "Dublin", moment: moment.tz("Europe/Dublin"), color: "#006400"},
	{timezone: "Europe/Gibraltar", country_code: "GI", weather_reference: "Gibraltar", moment: moment.tz("Europe/Gibraltar"), color: "#006400"},
	{timezone: "Europe/Guernsey", country_code: "GG", weather_reference: "Guernsey", moment: moment.tz("Europe/Guernsey"), color: "#006400"},
	{timezone: "Europe/Helsinki", country_code: "FI", weather_reference: "Helsinki", moment: moment.tz("Europe/Helsinki"), color: "#006400"},
	{timezone: "Europe/Isle_of_Man", country_code: "IM", weather_reference: "Douglas", moment: moment.tz("Europe/Isle_of_Man"), color: "#006400"},
	{timezone: "Europe/Istanbul", country_code: "TR", weather_reference: "Istanbul", moment: moment.tz("Europe/Istanbul"), color: "#006400"},
	{timezone: "Europe/Jersey", country_code: "JE", weather_reference: "Jersey", moment: moment.tz("Europe/Jersey"), color: "#006400"},
	{timezone: "Europe/Kaliningrad", country_code: "RU", weather_reference: "Kaliningrad", moment: moment.tz("Europe/Kaliningrad"), color: "#006400"},
	{timezone: "Europe/Kiev", country_code: "UA", weather_reference: "Kiev", moment: moment.tz("Europe/Kiev"), color: "#006400"},
	{timezone: "Europe/Kirov", country_code: "RU", weather_reference: "Kirov", moment: moment.tz("Europe/Kirov"), color: "#006400"},
	{timezone: "Europe/Lisbon", country_code: "PT", weather_reference: "Lisbon", moment: moment.tz("Europe/Lisbon"), color: "#006400"},
	{timezone: "Europe/Ljubljana", country_code: "SI", weather_reference: "Ljubljana", moment: moment.tz("Europe/Ljubljana"), color: "#006400"},
	{timezone: "Europe/London", country_code: "GB", weather_reference: "London", moment: moment.tz("Europe/London"), color: "#006400"},
	{timezone: "Europe/Luxembourg", country_code: "LU", weather_reference: "Luxembourg", moment: moment.tz("Europe/Luxembourg"), color: "#006400"},
	{timezone: "Europe/Madrid", country_code: "ES", weather_reference: "Madrid", moment: moment.tz("Europe/Madrid"), color: "#006400"},
	{timezone: "Europe/Malta", country_code: "MT", weather_reference: "Valletta", moment: moment.tz("Europe/Malta"), color: "#006400"},
	{timezone: "Europe/Mariehamn", country_code: "AX", weather_reference: "Mariehamn", moment: moment.tz("Europe/Mariehamn"), color: "#006400"},
	{timezone: "Europe/Minsk", country_code: "BY", weather_reference: "Minsk", moment: moment.tz("Europe/Minsk"), color: "#006400"},
	{timezone: "Europe/Monaco", country_code: "MC", weather_reference: "Monaco", moment: moment.tz("Europe/Monaco"), color: "#006400"},
	{timezone: "Europe/Moscow", country_code: "RU", weather_reference: "Moscow", moment: moment.tz("Europe/Moscow"), color: "#006400"},
	{timezone: "Europe/Nicosia", country_code: "CY", weather_reference: "Nicosia", moment: moment.tz("Europe/Nicosia"), color: "#006400"},
	{timezone: "Europe/Oslo", country_code: "NO", weather_reference: "Oslo", moment: moment.tz("Europe/Oslo"), color: "#006400"},
	{timezone: "Europe/Paris", country_code: "FR", weather_reference: "Paris", moment: moment.tz("Europe/Paris"), color: "#006400"},
	{timezone: "Europe/Podgorica", country_code: "ME", weather_reference: "Podgorica", moment: moment.tz("Europe/Podgorica"), color: "#006400"},
	{timezone: "Europe/Prague", country_code: "CZ", weather_reference: "Prague", moment: moment.tz("Europe/Prague"), color: "#006400"},
	{timezone: "Europe/Riga", country_code: "LV", weather_reference: "Riga", moment: moment.tz("Europe/Riga"), color: "#006400"},
	{timezone: "Europe/Rome", country_code: "IT", weather_reference: "Rome", moment: moment.tz("Europe/Rome"), color: "#006400"},
	{timezone: "Europe/Samara", country_code: "RU", weather_reference: "Samara", moment: moment.tz("Europe/Samara"), color: "#006400"},
	{timezone: "Europe/San_Marino", country_code: "SM", weather_reference: "San_Marino", moment: moment.tz("Europe/San_Marino"), color: "#006400"},
	{timezone: "Europe/Sarajevo", country_code: "BA", weather_reference: "Sarajevo", moment: moment.tz("Europe/Sarajevo"), color: "#006400"},
	{timezone: "Europe/Saratov", country_code: "RU", weather_reference: "Saratov", moment: moment.tz("Europe/Saratov"), color: "#006400"},
	{timezone: "Europe/Simferopol", country_code: "UA", weather_reference: "Simferopol", moment: moment.tz("Europe/Simferopol"), color: "#006400"},
	{timezone: "Europe/Skopje", country_code: "MK", weather_reference: "Skopje", moment: moment.tz("Europe/Skopje"), color: "#006400"},
	{timezone: "Europe/Sofia", country_code: "BG", weather_reference: "Sofia", moment: moment.tz("Europe/Sofia"), color: "#006400"},
	{timezone: "Europe/Stockholm", country_code: "SE", weather_reference: "Stockholm", moment: moment.tz("Europe/Stockholm"), color: "#006400"},
	{timezone: "Europe/Tallinn", country_code: "EE", weather_reference: "Tallinn", moment: moment.tz("Europe/Tallinn"), color: "#006400"},
	{timezone: "Europe/Tirane", country_code: "AL", weather_reference: "Tirana", moment: moment.tz("Europe/Tirane"), color: "#006400"},
	{timezone: "Europe/Ulyanovsk", country_code: "RU", weather_reference: "Ulyanovsk", moment: moment.tz("Europe/Ulyanovsk"), color: "#006400"},
	{timezone: "Europe/Uzhgorod", country_code: "UA", weather_reference: "Uzhgorod", moment: moment.tz("Europe/Uzhgorod"), color: "#006400"},
	{timezone: "Europe/Vaduz", country_code: "LI", weather_reference: "Vaduz", moment: moment.tz("Europe/Vaduz"), color: "#006400"},
	{timezone: "Europe/Vatican", country_code: "VA", weather_reference: "Vatican", moment: moment.tz("Europe/Vatican"), color: "#006400"},
	{timezone: "Europe/Vienna", country_code: "AT", weather_reference: "Vienna", moment: moment.tz("Europe/Vienna"), color: "#006400"},
	{timezone: "Europe/Vilnius", country_code: "LT", weather_reference: "Vilnius", moment: moment.tz("Europe/Vilnius"), color: "#006400"},
	{timezone: "Europe/Volgograd", country_code: "RU", weather_reference: "Volgograd", moment: moment.tz("Europe/Volgograd"), color: "#006400"},
	{timezone: "Europe/Warsaw", country_code: "PL", weather_reference: "Warsaw", moment: moment.tz("Europe/Warsaw"), color: "#006400"},
	{timezone: "Europe/Zagreb", country_code: "HR", weather_reference: "Zagreb", moment: moment.tz("Europe/Zagreb"), color: "#006400"},
	{timezone: "Europe/Zaporozhye", country_code: "UA", weather_reference: "Zaporozhye", moment: moment.tz("Europe/Zaporozhye"), color: "#006400"},
	{timezone: "Europe/Zurich", country_code: "CH", weather_reference: "Zurich", moment: moment.tz("Europe/Zurich"), color: "#006400"},

	//Indian ocean's timezones...
	{timezone: "Indian/Antananarivo", country_code: "MG", weather_reference: "Antananarivo", moment: moment.tz("Indian/Antananarivo"), color: "#33FFA2"},
	{timezone: "Indian/Chagos", country_code: "IO", weather_reference: "Camp Thunder Cove", moment: moment.tz("Indian/Chagos"), color: "#33FFA2"},
	{timezone: "Indian/Christmas", country_code: "CX", weather_reference: "Flying Fish Cove", moment: moment.tz("Indian/Christmas"), color: "#33FFA2"},
	{timezone: "Indian/Cocos", country_code: "CC", weather_reference: "West Island", moment: moment.tz("Indian/Cocos"), color: "#33FFA2"},
	{timezone: "Indian/Comoro", country_code: "KM", weather_reference: "Moroni", moment: moment.tz("Indian/Comoro"), color: "#33FFA2"},
	{timezone: "Indian/Kerguelen", country_code: "TF", weather_reference: "Kerguelen", moment: moment.tz("Indian/Kerguelen"), color: "#33FFA2"},
	{timezone: "Indian/Mahe", country_code: "SC", weather_reference: "Victoria", moment: moment.tz("Indian/Mahe"), color: "#33FFA2"},
	{timezone: "Indian/Maldives", country_code: "MV", weather_reference: "Male", moment: moment.tz("Indian/Maldives"), color: "#33FFA2"},
	{timezone: "Indian/Mauritius", country_code: "MU", weather_reference: "Port Louis", moment: moment.tz("Indian/Mauritius"), color: "#33FFA2"},
	{timezone: "Indian/Mayotte", country_code: "YT", weather_reference: "Mamoudzou", moment: moment.tz("Indian/Mayotte"), color: "#33FFA2"},
	{timezone: "Indian/Reunion", country_code: "RE", weather_reference: "Saint-Denis", moment: moment.tz("Indian/Reunion"), color: "#33FFA2"},

	//Pacific ocean's timezones...
	{timezone: "Pacific/Apia", country_code: "WS", weather_reference: "Apia", moment: moment.tz("Pacific/Apia"), color: "#4B0082"},
	{timezone: "Pacific/Auckland", country_code: "NZ", weather_reference: "Auckland", moment: moment.tz("Pacific/Auckland"), color: "#4B0082"},
	{timezone: "Pacific/Bougainville", country_code: "PG", weather_reference: "Bougainville", moment: moment.tz("Pacific/Bougainville"), color: "#4B0082"},
	{timezone: "Pacific/Chatham", country_code: "NZ", weather_reference: "Waitangi", moment: moment.tz("Pacific/Chatham"), color: "#4B0082"},
	{timezone: "Pacific/Chuuk", country_code: "FM", weather_reference: "Chuuk", moment: moment.tz("Pacific/Chuuk"), color: "#4B0082"},
	{timezone: "Pacific/Easter", country_code: "CL", weather_reference: "Hanga Roa", moment: moment.tz("Pacific/Easter"), color: "#4B0082"},
	{timezone: "Pacific/Efate", country_code: "VU", weather_reference: "Port-Vila", moment: moment.tz("Pacific/Efate"), color: "#4B0082"},
	{timezone: "Pacific/Enderbury", country_code: "KI", weather_reference: "Port-Vila", moment: moment.tz("Pacific/Enderbury"), color: "#4B0082"},
	{timezone: "Pacific/Fakaofo", country_code: "TK", weather_reference: "Fakaofo", moment: moment.tz("Pacific/Fakaofo"), color: "#4B0082"},
	{timezone: "Pacific/Fiji", country_code: "FJ", weather_reference: "Suva", moment: moment.tz("Pacific/Fiji"), color: "#4B0082"},
	{timezone: "Pacific/Funafuti", country_code: "TV", weather_reference: "Funafuti", moment: moment.tz("Pacific/Funafuti"), color: "#4B0082"},
	{timezone: "Pacific/Galapagos", country_code: "EC", weather_reference: "Puerto Baquerizo Moreno", moment: moment.tz("Pacific/Galapagos"), color: "#4B0082"},
	{timezone: "Pacific/Gambier", country_code: "PF", weather_reference: "Rikitea", moment: moment.tz("Pacific/Gambier"), color: "#4B0082"},
	{timezone: "Pacific/Guadalcanal", country_code: "SB", weather_reference: "Honiara", moment: moment.tz("Pacific/Guadalcanal"), color: "#4B0082"},
	{timezone: "Pacific/Guam", country_code: "GU", weather_reference: "Hagåtña", moment: moment.tz("Pacific/Guam"), color: "#4B0082"},
	{timezone: "Pacific/Honolulu", country_code: "US", weather_reference: "Honolulu", moment: moment.tz("Pacific/Honolulu"), color: "#4B0082"},
	{timezone: "Pacific/Kiritimati", country_code: "KI", weather_reference: "Kiritimati", moment: moment.tz("Pacific/Kiritimati"), color: "#4B0082"},
	{timezone: "Pacific/Kosrae", country_code: "FM", weather_reference: "Kosrae", moment: moment.tz("Pacific/Kosrae"), color: "#4B0082"},
	{timezone: "Pacific/Kwajalein", country_code: "MH", weather_reference: "Kwajalein", moment: moment.tz("Pacific/Kwajalein"), color: "#4B0082"},
	{timezone: "Pacific/Majuro", country_code: "MH", weather_reference: "Majuro", moment: moment.tz("Pacific/Majuro"), color: "#4B0082"},
	{timezone: "Pacific/Marquesas", country_code: "PF", weather_reference: "Taiohae", moment: moment.tz("Pacific/Marquesas"), color: "#4B0082"},
	{timezone: "Pacific/Midway", country_code: "US", weather_reference: "Midway", moment: moment.tz("Pacific/Midway"), color: "#4B0082"},
	{timezone: "Pacific/Nauru", country_code: "NR", weather_reference: "Nauru", moment: moment.tz("Pacific/Nauru"), color: "#4B0082"},
	{timezone: "Pacific/Niue", country_code: "NU", weather_reference: "Niue", moment: moment.tz("Pacific/Niue"), color: "#4B0082"},
	{timezone: "Pacific/Norfolk", country_code: "NF", weather_reference: "Norfolk", moment: moment.tz("Pacific/Norfolk"), color: "#4B0082"},
	{timezone: "Pacific/Noumea", country_code: "NC", weather_reference: "Noumea", moment: moment.tz("Pacific/Noumea"), color: "#4B0082"},
	{timezone: "Pacific/Pago_Pago", country_code: "AS", weather_reference: "Pago Pago", moment: moment.tz("Pacific/Pago_Pago"), color: "#4B0082"},
	{timezone: "Pacific/Palau", country_code: "PW", weather_reference: "Palau", moment: moment.tz("Pacific/Palau"), color: "#4B0082"},
	{timezone: "Pacific/Pitcairn", country_code: "PN", weather_reference: "Pitcairn", moment: moment.tz("Pacific/Pitcairn"), color: "#4B0082"},
	{timezone: "Pacific/Pohnpei", country_code: "FM", weather_reference: "Pohnpei", moment: moment.tz("Pacific/Pohnpei"), color: "#4B0082"},
	{timezone: "Pacific/Port_Moresby", country_code: "PG", weather_reference: "Port-Moresby", moment: moment.tz("Pacific/Port_Moresby"), color: "#4B0082"},
	{timezone: "Pacific/Rarotonga", country_code: "CK", weather_reference: "Avarua", moment: moment.tz("Pacific/Rarotonga"), color: "#4B0082"},
	{timezone: "Pacific/Saipan", country_code: "MP", weather_reference: "Saipan", moment: moment.tz("Pacific/Saipan"), color: "#4B0082"},
	{timezone: "Pacific/Tahiti", country_code: "PF", weather_reference: "Tarawa", moment: moment.tz("Pacific/Tahiti"), color: "#4B0082"},
	{timezone: "Pacific/Tarawa", country_code: "KI", weather_reference: "Tarawa", moment: moment.tz("Pacific/Tarawa"), color: "#4B0082"},
	{timezone: "Pacific/Tongatapu", country_code: "TO", weather_reference: "Tongatapu", moment: moment.tz("Pacific/Tongatapu"), color: "#4B0082"},
	{timezone: "Pacific/Wake", country_code: "UM", weather_reference: "Wake", moment: moment.tz("Pacific/Wake"), color: "#4B0082"},
	{timezone: "Pacific/Wallis", country_code: "WF", weather_reference: "Mata-Utu", moment: moment.tz("Pacific/Wallis"), color: "#4B0082"}
];

// Definition of the 'getCountryCodeFromTimezone' function to identify and return the country code of the 'wishedTimezone' timezone...
function getCountryCodeFromTimezone(wishedTimezone) {

	// Definition of the 'wishedCountryCode' variable which will contain the found country code...
	var wishedCountryCode = "";

	// Browse for each element contained in the 'timezones' array...
	for(var i = 0; i < timezones.length; i++)
	{
		// If the current element of the 'timezones' array corresponds to the desired timezone...
		if(timezones[i].timezone === wishedTimezone) {

			// Affectation of the found country code to the 'wishedCountryCode' variable...
			wishedCountryCode = timezones[i].country_code;

			// Leaving the loop...
			break;
		}
	}

	return wishedCountryCode;
}

// Export the 'timezones' array and the 'moment' object...
module.exports = {
	'timezones': timezones,
	'getCountryCodeFromTimezone': getCountryCodeFromTimezone,
	'moment': moment
}