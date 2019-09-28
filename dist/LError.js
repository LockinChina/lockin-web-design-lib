"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LLable = _interopRequireDefault(require("./LLable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  font-weight:400;\n  color:rgba(255,82,82,1);\n  line-height:17px;\n  margin-top: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextError = _styledComponents.default.div(_templateObject());

var LError = function LError(_ref) {
  var text = _ref.text;
  return _react.default.createElement(TextError, null, text);
};

LError.propTypes = {
  text: _propTypes.default.string
};
var _default = LError;
exports.default = _default;