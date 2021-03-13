// Array containing all accepted fonts with their name and URL...
var fontFamilies = [

	{id: 0, font: "Anurati", url: "http://fonts.cdnfonts.com/css/anurati"},
	{id: 1, font: "Sofia", url: "https://fonts.googleapis.com/css?family=Sofia"},
	{id: 2, font: "Ranchers", url: "https://fonts.googleapis.com/css?family=Ranchers"},
	{id: 3, font: "Redressed", url: "https://fonts.googleapis.com/css?family=Redressed"},
	{id: 4, font: "Montserrat", url: "https://fonts.googleapis.com/css?family=Montserrat"},
	{id: 5, font: "Poppins", url: "https://fonts.googleapis.com/css?family=Poppins"},
	{id: 6, font: "Nunito", url: "https://fonts.googleapis.com/css?family=Nunito"},
	{id: 7, font: "Rubik", url: "https://fonts.googleapis.com/css?family=Rubik"},
	{id: 8, font: "Lora", url: "https://fonts.googleapis.com/css?family=Lora"},
	{id: 9, font: "Mukta", url: "https://fonts.googleapis.com/css?family=Mukta"},
	{id: 10, font: "Cursive", url: ""}
];

// Definition of the 'getFontFamilyFromId' function to identify and return all informations about font family identified by its id...
function getFontFamilyFromId(wishedId) {

	// Definition of the 'wishedFontFamily' array which will contain all informations about wished font family...
	var wishedFontFamily = [];

	// Browse for each element contained in the 'fontFamilies' array...
	for(var i = 0; i < fontFamilies.length; i++)
	{
		// If the current element of the 'fontFamilies' array corresponds to the 'wishedId' value...
		if(fontFamilies[i].id === wishedId) {

			// Configuration of 'wishedFontFamily' array to return...
			wishedFontFamily.push(fontFamilies[i].font);
			wishedFontFamily.push(fontFamilies[i].url);

			// Leaving the loop...
			break;
		}
	}

	return wishedFontFamily;
}

// Export the 'fontFamilies' array...
module.exports = {
	'fontFamilies': fontFamilies,
	'getFontFamilyFromId': getFontFamilyFromId
}