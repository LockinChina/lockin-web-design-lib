"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.4;\n  -webkit-filter: grayscale(100%);\n  filter: gray;\n  :hover {\n    cursor: default;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  border: 1px solid #000099;\n  color: #000099;\n  &:hover {\n    background: #ecf3ff;\n  }\n  &:active {\n    background: #fff;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: #000099;\n  color: #fff;\n  &:hover {\n    background: #004ec9;\n  }\n  &:active {\n    background: #000099;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: none;\n  outline: none;\n  cursor: pointer;\n  height: 40px;\n  border-radius: 4px;\n  border: 1px solid #fff;\n  padding: 0 30px;\n  transition: all 0.2s linear 0s; -moz-transition: all 0.2s linear 0s; -webkit-transition: all 0.2s linear 0s;\n  color: #000099;\n  :hover {\n    background: #fff;\n  }\n  :active {\n    background: rgba(240, 246, 255, 1);\n  }\n  span {\n    font-family: 'iconfont', 'lockinu';\n    color: green;\n    vertical-align: middle;\n    margin-right: 4px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultBtn = (0, _styledComponents.css)(_templateObject());
var btnSolid = (0, _styledComponents.css)(_templateObject2());
var btnHollow = (0, _styledComponents.css)(_templateObject3());
var invalid = (0, _styledComponents.css)(_templateObject4());

var ButtonStyle = _styledComponents.default.button(_templateObject5(), defaultBtn, function (props) {
  return props.invalid && invalid;
}, function (props) {
  return props.solid && btnSolid;
}, function (props) {
  return props.hollow && btnHollow;
});

var _default = ButtonStyle;
exports.default = _default;