// Array containing all accepted fonts with their name and URL...
var fontFamilies = [

	{id: 0, font: "Anurati", url: "http://fonts.cdnfonts.com/css/anurati", selected: ""},
	{id: 1, font: "Sofia", url: "https://fonts.googleapis.com/css?family=Sofia", selected: ""},
	{id: 2, font: "Ranchers", url: "https://fonts.googleapis.com/css?family=Ranchers", selected: ""},
	{id: 3, font: "Redressed", url: "https://fonts.googleapis.com/css?family=Redressed", selected: ""},
	{id: 4, font: "Montserrat", url: "https://fonts.googleapis.com/css?family=Montserrat", selected: ""},
	{id: 5, font: "Poppins", url: "https://fonts.googleapis.com/css?family=Poppins", selected: ""},
	{id: 6, font: "Nunito", url: "https://fonts.googleapis.com/css?family=Nunito", selected: ""},
	{id: 7, font: "Rubik", url: "https://fonts.googleapis.com/css?family=Rubik", selected: ""},
	{id: 8, font: "Lora", url: "https://fonts.googleapis.com/css?family=Lora", selected: ""},
	{id: 9, font: "Mukta", url: "https://fonts.googleapis.com/css?family=Mukta", selected: ""},
	{id: 10, font: "Oswald", url: "https://fonts.googleapis.com/css?family=Oswald", selected: ""},
	{id: 11, font: "Train One", url: "https://fonts.googleapis.com/css?family=Train+One", selected: ""},
	{id: 12, font: "Raleway", url: "https://fonts.googleapis.com/css?family=Raleway", selected: ""},
	{id: 13, font: "UnifrakturMaguntia", url: "https://fonts.googleapis.com/css?family=UnifrakturMaguntia", selected: ""},
	{id: 14, font: "Impact Label Reversed", url: "http://fonts.cdnfonts.com/css/impact-label-reversed", selected: ""},
	{id: 15, font: "vSGeometrica", url: "http://fonts.cdnfonts.com/css/vsgeometrica", selected: ""},
	{id: 16, font: "Rune", url: "http://fonts.cdnfonts.com/css/rune", selected: ""},
	{id: 17, font: "Cursive", url: "", selected: ""},
	{id: 18, font: "Arial", url: "", selected: ""},
	{id: 19, font: "Verdana", url: "", selected: ""},
	{id: 20, font: "Helvetica", url: "", selected: ""},
	{id: 21, font: "Garamond", url: "", selected: ""},
	{id: 22, font: "Georgia", url: "", selected: ""},
	{id: 23, font: "Monaco", url: "", selected: ""},
	{id: 24, font: "Copperplate", url: "", selected: ""},
	{id: 25, font: "Papyrus", url: "", selected: ""},
	{id: 26, font: "Impact", url: "", selected: ""},
	{id: 27, font: "Comic Sans MS", url: "", selected: ""},
	{id: 28, font: "Webdings", url: "", selected: ""},
	{id: 29, font: "Wingdings", url: "", selected: ""},
	{id: 30, font: "Tahoma", url: "", selected: ""},
	{id: 31, font: "Brush Script MT", url: "", selected: ""},
	{id: 32, font: "Lucida Handwriting", url: "", selected: ""}
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