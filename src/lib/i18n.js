const i18n = require('./i18n-validation-data.json');
let currentLang = 'en';
export function setLanguage(id) {
  currentLang = id;
}
export function t(text) {
  return (i18n[currentLang] && i18n[currentLang][text]) || text;
}