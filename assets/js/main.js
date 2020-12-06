$( function() {
	
	//
	$("#functionalities").tabs();

	//
	$("#timezones_displayer").accordion();

	//
	$("#choosen_language").change(function(){

		//
		$("#choosen_language_form").submit();
	});

	//
	$("#second_choosen_language").change(function(){
		
		//
		$("#second_choosen_language_form").submit();
	});

	//
	$("#choosen_date_and_time_format").change(function(){

		//
		$("#choosen_format_form").submit();
	});

	//
	$("#choosen_country_code").change(function(){

		//
		$("#choosen_country_code_form").submit();
	});
});