var i18n = require('i18n');

var currentLocale;

i18n.configure({
  // setup some locales - other locales default to en silently
  locales:['en-us', 'es-es', 'fr-fr', 'ca'],

  // where to store json files - defaults to './locales' relative to modules directory
  directory: __dirname + '/../seeds/locales',

  defaultLocale: currentLocale,
});

module.exports = function(req, res, next) {

  currentLocale = res.locale;

  i18n.init(req, res);

  return next();
};
