"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: rgba(51,51,51,1);\n  font-weight: 500;\n  display: block;\n  margin-bottom: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputLabel = _styledComponents.default.label(_templateObject());

var LLable = function LLable(_ref) {
  var text = _ref.text,
      htmlFor = _ref.htmlFor;
  return _react.default.createElement(InputLabel, {
    for: htmlFor
  }, text);
};

LLable.propTypes = {
  text: _propTypes.default.string,
  htmlFor: _propTypes.default.string
};
var _default = LLable;
exports.default = _default;