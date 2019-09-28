"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LError = _interopRequireDefault(require("./LError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width:16px;\n    height:16px;\n    line-height: 16px;\n    font-size: 12px;\n    background:rgba(139,139,139,1);\n    border-radius:50%;\n    color: #fff;\n    text-align: center;\n    display: inline-block;\n    margin-left: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height:28px;\n    line-height: 28px;\n    padding: 4px 15px;\n    font-size: 14px;\n    background:rgba(255,255,255,1);\n    border-radius:14px;\n    border:1px solid rgba(139,139,139,1);\n    color: rgba(139,139,139,1);\n    text-align: center;\n    cursor: pointer;\n    &:hover {\n      color:rgba(76,138,235,1);\n      border:1px solid rgba(76,138,235,1);\n    }\n    &:hover > span:last-child {\n      background:rgba(76,138,235,1);\n    }\n    &:active {\n      color:rgba(0,0,153,1);\n      border:1px solid rgba(0,0,153,1);\n    }\n    &:active > span:last-child {\n      background:rgba(0,0,153,1);\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height:26px;\n    background:rgba(255,255,255,1);\n    border-radius:14px;\n    font-size: 14px;\n    border:1px solid rgba(0,0,153,1);\n    padding: 4px 15px;\n    color: rgba(0,0,153,1);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NormalSpan = _styledComponents.default.span(_templateObject());

var EditSpan = _styledComponents.default.span(_templateObject2());

var DeleteIcon = _styledComponents.default.span(_templateObject3());

var LEditableLabel = function LEditableLabel(_ref) {
  var text = _ref.text,
      removable = _ref.removable,
      _onClick = _ref.onClick;

  if (removable) {
    return _react.default.createElement(EditSpan, {
      onClick: function onClick() {
        return _onClick();
      }
    }, _react.default.createElement("span", null, text), _react.default.createElement(DeleteIcon, null, "\xD7"));
  } else {
    return _react.default.createElement(NormalSpan, null, text);
  }
};

LEditableLabel.propTypes = {
  text: _propTypes.default.string,
  removable: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
var _default = LEditableLabel;
exports.default = _default;