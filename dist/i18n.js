"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLanguage = setLanguage;
exports.t = t;

var i18n = require('./i18n-validation-data.json');

var currentLang = 'en';

function setLanguage(id) {
  currentLang = id;
}

function t(text) {
  return i18n[currentLang] && i18n[currentLang][text] || text;
}