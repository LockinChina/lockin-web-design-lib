"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../iconfont/iconfont.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n          padding-left: 20px;\n\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      font-family: \"lockinu\" !important;\n      font-size: 16px;\n      font-style: normal;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      position: relative;\n      &:before {\n          position: absolute;\n          top: 0;\n          left: 0;\n          font-size: 12px;\n      }\n      ", ";\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            color: #000099;\n            background-color: #fff;\n            border:none;\n            &:hover {\n              background:rgba(246,250,255,1);\n            };\n            &:active {\n              background:rgba(240,246,255,1);\n            };\n        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n            color: #535353;\n            background-color: #fff;\n            border:1px solid rgba(90,90,90,1);\n            &:hover {\n              color: rgba(143,143,143,1);\n              border-color: rgba(143,143,143,1);\n            };\n            &:active {\n              color: #535353;\n              border-color: rgba(90,90,90,1);\n            };\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            color: #000099;\n            background-color: #fff;\n            border: 1px solid #000099;\n            &:hover {\n              background-color: rgba(236,243,255,1);\n              border-color: rgba(0,0,153,1);\n            };\n            &:active {\n              border-color: rgba(0,0,153,1);\n            };\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            color: #fff;\n            background-color: #000099;\n            &:hover {\n              background-color:rgba(0,78,201,1);\n            };\n            &:active {\n              background-color: rgba(0,0,153,1);\n            };\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        ", ";\n        ", ";\n        ", ";\n        ", ";\n        ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            width: ", "px;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        font-size: 16px;\n        padding: 0 30px;\n        height: 40px;\n        line-height: 40px;\n        border-radius: 4px;\n        cursor: pointer;\n        position: relative;\n        &:focus{ outline: none; }\n        ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ButtonStyle(props) {
  // type 按钮样式4种 hasIcon 是否有Icon
  var type = props.type,
      _onClick = props.onClick,
      hasIcon = props.hasIcon,
      style = props.style,
      className = props.className,
      IconName = props.IconName,
      width = props.width;
  var ButtonBasic = (0, _styledComponents.css)(_templateObject(), width && (0, _styledComponents.css)(_templateObject2(), width));

  var ButtonStyle = _styledComponents.default.button(_templateObject3(), ButtonBasic, type === 1 && (0, _styledComponents.css)(_templateObject4()), type === 2 && (0, _styledComponents.css)(_templateObject5()), type === 3 && (0, _styledComponents.css)(_templateObject6()), type === 4 && (0, _styledComponents.css)(_templateObject7()));

  var IconDiv = _styledComponents.default.div(_templateObject8(), hasIcon && (0, _styledComponents.css)(_templateObject9()));

  return _react.default.createElement(ButtonStyle, {
    type: type,
    className: className,
    style: style,
    hasIcon: hasIcon,
    onClick: function onClick() {
      return _onClick();
    }
  }, _react.default.createElement(IconDiv, {
    className: "".concat(hasIcon ? "".concat(IconName) : '')
  }, _react.Children.toArray(props.children)));
}

ButtonStyle.propTypes = {
  type: _propTypes.default.number,
  onClick: _propTypes.default.func,
  hasIcon: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  IconName: _propTypes.default.string,
  width: _propTypes.default.number
};
ButtonStyle.defaultProps = {
  type: 1,
  onClick: function onClick() {},
  hasIcon: false,
  style: {},
  className: '',
  IconName: ''
};
var _default = ButtonStyle;
exports.default = _default;