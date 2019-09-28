"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

require("./common.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LEditableLabel = _interopRequireDefault(require("./LEditableLabel"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LCheckBox = function LCheckBox(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'checkbox' : _ref$type,
      checked = _ref.checked,
      text = _ref.text,
      _onChange = _ref.onChange;
  return _react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, _react.default.createElement("input", {
    type: type,
    id: "checkLab",
    checked: checked,
    onChange: function onChange() {
      return _onChange();
    }
  }), _react.default.createElement("label", {
    htmlFor: "checkLab",
    style: {
      marginLeft: 10,
      cursor: 'pointer'
    }
  }, text));
};

LCheckBox.propTypes = {
  type: _propTypes.default.string,
  checked: _propTypes.default.bool,
  text: _propTypes.default.string,
  onChange: _propTypes.default.func
};
var _default = LCheckBox;
exports.default = _default;