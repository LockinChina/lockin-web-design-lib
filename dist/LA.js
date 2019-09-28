"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #999;\n  cursor: pointer;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n    color: rgba(0, 0, 153, 1);\n  }\n\n  &:active {\n    text-decoration: underline;\n    color: rgba(0, 0, 153, 1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LA = _styledComponents.default.a(_templateObject());

var _default = LA;
exports.default = _default;