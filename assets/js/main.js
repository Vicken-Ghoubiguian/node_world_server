$( function() {
	
	$("#functionalities").tabs();
	$("#timezones_displayer").accordion();
	$("#choosen_language").change(function(){

		$("#choosen_language_form").submit();
	});

	$("#choosen_date_and_time_format").change(function(){

		$("#choosen_format_form").submit();
	});
});