// Function of execution of all the JS code of 'main.js' file...
$( function() {
	
	// For 'tabs' jQuery UI effect...
	$("#functionalities").tabs();

	// For 'accordion' jQuery UI effect...
	$("#timezones_displayer").accordion();

	// Triggering an action when an element of the 'choosen_language' <select> is chosen...
	$("#choosen_language").selectmenu({ change: function(event, ui){

		// The form 'choosen_language_form' is then submitted with all of its datas...
		$("#choosen_language_form").submit();
	}});

	// Triggering an action when an element of the 'second_choosen_language' <select> is chosen...
	$("#second_choosen_language").selectmenu({ change: function(event, ui){
		
		// The form 'second_choosen_language_form' is then submitted with all of its datas...
		$("#second_choosen_language_form").submit();
	}});

	// Triggering an action when an element of the 'choosen_date_and_time_format' <select> is chosen...
	$("#choosen_date_and_time_format").selectmenu({ change: function(event, ui){

		// The form 'choosen_format_form' is then submitted with all of its datas...
		$("#choosen_format_form").submit();
	}});

	// Triggering an action when an element of the 'choosen_country_code' <select> is chosen...
	$("#choosen_country_code").selectmenu({ change: function(event, ui){

		// The form 'choosen_country_code_form' is then submitted with all of its datas...
		$("#choosen_country_code_form").submit();
	}});

	// Triggering an action when an element of the 'choosen_temperature_unit' <select> is chosen...
	$("#choosen_temperature_unit").selectmenu({ change: function(event, ui){

		// The form 'choosen_temperature_unit_form' is then submitted with all of its datas...
		$("#choosen_temperature_unit_form").submit();
	}});

	// Triggering an action when an element of the 'choosen_pressure_unit' <select> is chosen...
	$("#choosen_pressure_unit").selectmenu({ change: function(event, ui){

		// The form 'choosen_pressure_unit_form' is then submitted with all of its datas...
		//$("#choosen_pressure_unit_form").submit();
	}});
});