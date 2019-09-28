"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _inputStyle = _interopRequireDefault(require("./inputStyle"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Input = _react.default.forwardRef(function (props, ref) {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      blurState = _useState2[0],
      setBlurState = _useState2[1];

  var value = props.value,
      placeholder = props.placeholder,
      titleName = props.titleName,
      _onChange = props.onChange,
      leftIconName = props.leftIconName,
      leftIconColor = props.leftIconColor,
      leftIconSize = props.leftIconSize,
      rightIconName = props.rightIconName,
      rightIconColor = props.rightIconColor,
      rightIconSize = props.rightIconSize,
      rightIconTitle = props.rightIconTitle,
      rightIconOnClick = props.rightIconOnClick,
      defaultValue = props.defaultValue,
      wrongText = props.wrongText,
      type = props.type,
      maxLength = props.maxLength,
      width = props.width,
      readOnly = props.readOnly,
      name = props.name;
  (0, _react.useEffect)(function () {}, []);
  return _react.default.createElement(_inputStyle.default, {
    style: {
      width: "".concat(width, "px")
    }
  }, _react.default.createElement("p", {
    className: "title",
    style: {
      display: titleName ? 'block' : 'none'
    }
  }, titleName), _react.default.createElement("div", {
    className: "inputBody fadeAnim " + (blurState ? "active " : "") + (wrongText ? "textWrong " : "") + (readOnly ? "readOnlyOpacity " : "")
  }, _react.default.createElement("span", {
    className: "iconfont " + (leftIconName ? leftIconName : ""),
    style: {
      color: "".concat(leftIconColor),
      fontSize: "".concat(leftIconSize, "px ")
    }
  }), _react.default.createElement("input", {
    ref: ref,
    name: name,
    disabled: readOnly ? "disabled" : "",
    type: type,
    defaultValue: defaultValue,
    placeholder: placeholder,
    className: "text ",
    maxLength: maxLength,
    readOnly: readOnly,
    onChange: function onChange(e) {
      var val = e.target.value;

      _onChange(val);
    },
    value: value,
    onBlur: function onBlur() {
      return setBlurState(0);
    },
    onFocus: function onFocus() {
      return setBlurState(1);
    }
  }), _react.default.createElement("span", {
    title: rightIconTitle,
    onClick: function onClick() {
      return rightIconOnClick();
    },
    className: "iconfont " + (rightIconName ? rightIconName : ""),
    style: {
      color: "".concat(rightIconColor),
      fontSize: "".concat(rightIconSize, "px")
    }
  })), _react.default.createElement("p", {
    className: "wrongText",
    style: {
      display: wrongText ? "block" : "none"
    }
  }, wrongText));
});

Input.defaultProps = {
  type: "text",
  placeholder: '请输入',
  onChange: function onChange() {},
  rightIconOnClick: function rightIconOnClick() {}
};
Input.propTypes = {
  defaultValue: _propTypes.default.string,
  value: _propTypes.default.node,
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func,
  leftIconName: _propTypes.default.string,
  leftIconColor: _propTypes.default.string,
  leftIconSize: _propTypes.default.number,
  rightIconName: _propTypes.default.string,
  rightIconColor: _propTypes.default.string,
  rightIconSize: _propTypes.default.number,
  rightIconTitle: _propTypes.default.string,
  rightIconOnClick: _propTypes.default.func,
  wrongText: _propTypes.default.string,
  type: _propTypes.default.string,
  maxLength: _propTypes.default.number,
  width: _propTypes.default.number,
  readOnly: _propTypes.default.bool,
  name: _propTypes.default.node,
  ref: _propTypes.default.node
};
var _default = Input;
exports.default = _default;