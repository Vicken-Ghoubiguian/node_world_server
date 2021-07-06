// Array containing all defined formats to display current date and time...
var formats = [

        {id: 0, format: "DD/MM/YYYY HH:mm:ss", name_format: "DD/MM/YYYY HH:mm:ss", selected: ""},
        {id: 1, format: "DD - MM - YYYY hh:mm:ss a", name_format: "DD - MM - YYYY hh:mm:ss a", selected: ""},
        {id: 2, format: "Do of MMMM hh:mm:ss a", name_format: "Do of MMMM hh:mm:ss a", selected: ""},
        {id: 3, format: "dddd MMM YYYY HH:mm:ss", name_format: "dddd MMM YYYY HH:mm:ss", selected: ""},
        {id: 4, format: "X", name_format: "Timestamp", selected: ""},
        {id: 5, format: "dddd DD MMMM YYYY HH:mm:ss", name_format: "dddd DD MMMM YYYY HH:mm:ss", selected: ""},
        {id: 6, format: "MMMM Do YYYY, hh:mm:ss a", name_format: "MMMM Do YYYY, hh:mm:ss a", selected: ""},
        {id: 7, format: "YYYY/MM/DD HH:mm:ss", name_format: "YYYY/MM/DD, HH:mm:ss", selected: ""}
];

// Export the 'formats' array...
module.exports = formats;
