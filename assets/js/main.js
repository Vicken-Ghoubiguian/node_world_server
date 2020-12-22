// Function of execution of all the JS code of 'main.js' file...
$( function() {
	
	// For 'tabs' jQuery UI effect...
	$("#functionalities").tabs();

	// For 'accordion' jQuery UI effect...
	$("#timezones_displayer").accordion();

	// Triggering an action when an element of the 'choosen_language' <select> is chosen...
	$("#choosen_language").change(function(){

		// The form 'choosen_language_form' is then submitted with all of its datas...
		$("#choosen_language_form").submit();
	});

	// Triggering an action when an element of the 'second_choosen_language' <select> is chosen...
	$("#second_choosen_language").change(function(){
		
		// The form 'second_choosen_language_form' is then submitted with all of its datas...
		$("#second_choosen_language_form").submit();
	});

	// Triggering an action when an element of the 'choosen_date_and_time_format' <select> is chosen...
	$("#choosen_date_and_time_format").change(function(){

		// The form 'choosen_format_form' is then submitted with all of its datas...
		$("#choosen_format_form").submit();
	});

	// Triggering an action when an element of the 'choosen_country_code' <select> is chosen...
	$("#choosen_country_code").change(function(){

		// The form 'choosen_country_code_form' is then submitted with all of its datas...
		$("#choosen_country_code_form").submit();
	});

	// Triggering an action when an element of the 'choosen_temperature_unit' <select> is chosen...
	$("#choosen_temperature_unit").change(function(){

		// The form 'choosen_temperature_unit_form' is then submitted with all of its datas...
		$("#choosen_temperature_unit_form").submit();
	});
});