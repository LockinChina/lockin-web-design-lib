"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _buttonStyle = _interopRequireDefault(require("./buttonStyle"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Button(props) {
  var titleName = props.titleName,
      children = props.children,
      invalid = props.invalid,
      _onClick = props.onClick,
      style = props.style,
      className = props.className,
      iconSize = props.iconSize,
      iconColor = props.iconColor;
  return _react.default.createElement(_buttonStyle.default, {
    solid: props.solid,
    hollow: props.hollow,
    invalid: invalid,
    onClick: function onClick() {
      if (!props.invalid) {
        _onClick(titleName);
      }
    },
    style: style,
    className: className
  }, _react.default.createElement("span", {
    className: "iconfont " + (props.iconName ? props.iconName : ""),
    style: {
      fontSize: "".concat(iconSize, "px"),
      color: "".concat(iconColor)
    }
  }), _react.Children.toArray(children), titleName);
}

Button.defaultProps = {
  titleName: '',
  children: '',
  onClick: function onClick() {}
};
Button.propTypes = {
  titleName: _propTypes.default.string,
  solid: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  hollow: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  iconName: _propTypes.default.string,
  iconSize: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  iconColor: _propTypes.default.string,
  onClick: _propTypes.default.func,
  invalid: _propTypes.default.bool,
  style: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = Button;
exports.default = _default;