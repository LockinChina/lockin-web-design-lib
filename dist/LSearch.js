"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = _interopRequireDefault(require("./Modal"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        font-size: ", ";\n        padding: 0 20px;\n        height: ", ";\n        line-height: ", ";\n        border-top-right-radius: 2px;\n        border-bottom-right-radius: 2px;\n        cursor: pointer;\n        position: relative;\n        color: #fff;\n        &:focus{ outline: none; };\n        background-color: #000099;\n        &:hover {\n          background-color:rgba(0,78,201,1);\n        };\n        &:active {\n          background-color: rgba(0,0,153,1);\n        };\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width:276px;\n  font-size: ", ";\n  height: ", ";\n  background:rgba(255,255,255,1);\n  border-top-left-radius:2px;\n  border-bottom-left-radius:2px;\n  border: 1px solid rgba(160,160,160,1);\n  border-right: none;\n  padding-left: ", ";\n  &:focus{\n    outline: none;\n  };\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyleInput = _styledComponents.default.input(_templateObject(), function (props) {
  return props.big ? '16px' : '14px';
}, function (props) {
  return props.big ? '35px' : '25px';
}, function (props) {
  return props.big ? '20px' : '10px';
});

var ButtonStyle = _styledComponents.default.button(_templateObject2(), function (props) {
  return props.big ? '16px' : '14px';
}, function (props) {
  return props.big ? '40px' : '30px';
}, function (props) {
  return props.big ? '40px' : '30px';
});

var InputDiv = _styledComponents.default.div(_templateObject3());

var LSearch = function LSearch(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      value = _ref.value,
      _ref$big = _ref.big,
      big = _ref$big === void 0 ? true : _ref$big,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      btnText = _ref.btnText,
      _onClick = _ref.onClick;
  return _react.default.createElement(InputDiv, null, _react.default.createElement(StyleInput, {
    type: type,
    value: value,
    placeholder: placeholder,
    big: big,
    onChange: function onChange(e) {
      return _onChange && _onChange(e.target.value);
    }
  }), _react.default.createElement(ButtonStyle, {
    big: big,
    onClick: function onClick() {
      return _onClick();
    }
  }, btnText));
};

LSearch.propTypes = {
  type: _propTypes.default.string,
  value: _propTypes.default.string,
  big: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  btnText: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = LSearch;
exports.default = _default;