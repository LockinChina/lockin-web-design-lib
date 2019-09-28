"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .text {\n    font-size: 14px;\n  }\n  .title{\n    height:20px;\n    font-size:14px;\n    font-weight:500;\n    color:rgba(51,51,51,1);\n    line-height:20px;\n    margin-bottom: 5px;\n  }\n  .inputBody {\n    display: flex;\n    flex-direction: row;\n    border: 1px solid #A0A0A0;\n    background: #fff;\n    height: 36px;\n    border-radius:2px;\n    width: 100%;\n    align-items: center;\n    &.active{\n      border:1px solid #005ED4;\n    }\n    &.textWrong{\n      border: 1px solid #FF5252;\n    }\n    &.readOnlyOpacity{\n      opacity: 0.6;\n    }\n    span:nth-child(1),span:last-child{\n      font-family: 'iconfont','lockinu' !important;\n    }\n    span:nth-child(1){\n      ::before{\n        margin: 0 0px 0 10px;\n      }\n    }\n    span:last-child{\n      ::before{\n        margin: 0 10px 0 0;\n        cursor: pointer;\n      }\n    }\n    \n    .text{\n      flex: 1;\n      box-sizing: border-box;\n      padding: 8px 10px;\n      line-height: 20px;\n      padding: 8px 10px;\n      background: none;\n      border: none;\n    }\n  }\n  .wrongText{\n    margin-top: 5px;\n    color: #FF5252;\n    font-size:12px;\n    line-height: 17px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents.default.div(_templateObject());

var _default = Input;
exports.default = _default;