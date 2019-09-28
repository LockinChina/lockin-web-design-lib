"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      color: rgba(0, 0, 153, 1);\n      &:before {\n        position: absolute;\n        content: '';\n        left: 50%;\n        bottom: 0;\n        width: 30px;\n        height: 4px;\n        border-radius: 2px;\n        background-color: rgba(0, 0, 153, 1);\n        margin-left: -15px;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 400;\n  color: rgba(100, 100, 100, 1);\n  padding: 10px 30px;\n  margin-right: 30px;\n  position: relative;\n  cursor: pointer;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabDiv = _styledComponents.default.div(_templateObject(), function (props) {
  return props.select && (0, _styledComponents.css)(_templateObject2());
});

var LTab = function LTab(_ref) {
  var data = _ref.data,
      selectIndex = _ref.selectIndex,
      _onClick = _ref.onClick;
  return _react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, data.map(function (item, index) {
    return _react.default.createElement(TabDiv, {
      key: "LTab".concat(index + 1),
      select: Number(index) === Number(selectIndex),
      onClick: function onClick() {
        return _onClick(index);
      }
    }, item.name);
  }));
};

LTab.propTypes = {
  data: _propTypes.default.array,
  selectIndex: _propTypes.default.number,
  onClick: _propTypes.default.func
};
var _default = LTab;
exports.default = _default;