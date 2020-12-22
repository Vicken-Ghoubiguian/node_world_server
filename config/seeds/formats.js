// Array containing all defined formats to display current date and time...
var formats = [

        {format: "DD/MM/YYYY HH:mm:ss", id: 0, selected: ""},
        {format: "DD - MM - YYYY hh:mm:ss a", id: 1, selected: ""},
        {format: "Do of MMMM hh:mm:ss a", id: 2, selected: ""},
        {format: "dddd MMM YYYY HH:mm:ss", id: 3, selected: ""},
        {format: "dddd MMMM YYYY HH:mm:ss", id: 4, selected: ""},
        {format: "MMMM Do YYYY, hh:mm:ss a", id: 5, selected: ""}
];

// Export the 'formats' array...
module.exports = formats;
