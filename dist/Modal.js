"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("./Button/Button"));

require("./common.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width:470px;\n    margin-left: -235px;\n    max-height: ", "px;\n    overflow-y: auto;\n    margin-top: -", "px;\n    background:rgba(255,255,255,1);\n    box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);\n    border-radius:3px;\n    padding: 20px 20px 10px;\n    & > div:first-child {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 10px;\n    }\n    \n    & > div:first-child > div:first-child {\n        font-size: 18px;\n        font-weight: 500;\n        color:rgba(51,51,51,1);\n        line-height:22px;\n    }\n    \n    & > div:first-child > div:last-child {\n        font-size: 18px;\n        color: rgba(102,102,102,1);\n        cursor: pointer;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.3);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalBg = _styledComponents.default.div(_templateObject());

var ModalNodeContent = _styledComponents.default.div(_templateObject2(), Number(getWindowHeight() * 0.8).toFixed(), Number(getWindowHeight() * 0.8).toFixed() / 2);

function getWindowHeight() {
  var windowHeight = 0;

  if (document.compatMode === "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }

  return windowHeight;
}

var Modal = function Modal(_ref) {
  var visible = _ref.visible,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 1 : _ref$type,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? '确定' : _ref$okText,
      onOk = _ref.onOk,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? '取消' : _ref$cancelText,
      onCancel = _ref.onCancel,
      title = _ref.title,
      detail = _ref.detail,
      contentText = _ref.contentText,
      contentNode = _ref.contentNode,
      _ref$btnStyle = _ref.btnStyle,
      btnStyle = _ref$btnStyle === void 0 ? 1 : _ref$btnStyle;
  return _react.default.createElement(ModalBg, {
    style: {
      display: visible ? 'block' : 'none'
    }
  }, type === 1 && _react.default.createElement("div", {
    className: 'modal-content'
  }, _react.default.createElement("div", null, contentNode), _react.default.createElement(_Button.default, {
    solid: true,
    onClick: function onClick() {
      return onOk();
    }
  }, okText)), type === 2 && _react.default.createElement("div", {
    className: 'modal-title-content'
  }, _react.default.createElement("div", null, _react.default.createElement("div", null, title), _react.default.createElement("div", {
    solid: true,
    onClick: function onClick() {
      return onCancel();
    }
  }, "\xD7")), _react.default.createElement("div", null, contentNode), btnStyle === 1 ? _react.default.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, _react.default.createElement(_Button.default, {
    hollow: true,
    type: 2,
    onClick: function onClick() {
      return onCancel();
    }
  }, cancelText), _react.default.createElement(_Button.default, {
    solid: true,
    style: {
      marginLeft: 10
    },
    onClick: function onClick() {
      return onOk();
    }
  }, okText)) : _react.default.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, _react.default.createElement(_Button.default, {
    type: 4,
    onClick: function onClick() {
      return onCancel();
    }
  }, cancelText), _react.default.createElement(_Button.default, {
    hollow: true,
    type: 2,
    style: {
      marginLeft: 10
    },
    onClick: function onClick() {
      return onOk();
    }
  }, okText))), type === 3 && _react.default.createElement(ModalNodeContent, null, _react.default.createElement("div", null, _react.default.createElement("div", null, title), _react.default.createElement("div", {
    onClick: onCancel
  }, "\xD7")), _react.default.createElement("div", null, contentNode), btnStyle === 1 ? _react.default.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: 10
    }
  }, _react.default.createElement(_Button.default, {
    type: 2,
    onClick: function onClick() {
      return onCancel();
    }
  }, cancelText), _react.default.createElement(_Button.default, {
    hollow: true,
    style: {
      marginLeft: 10
    },
    onClick: function onClick() {
      return onOk();
    }
  }, okText)) : _react.default.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: 10
    }
  }, _react.default.createElement(_Button.default, {
    hollow: true,
    type: 4,
    onClick: function onClick() {
      return onCancel();
    }
  }, cancelText), _react.default.createElement(_Button.default, {
    solid: true,
    type: 2,
    style: {
      marginLeft: 10
    },
    onClick: function onClick() {
      return onOk();
    }
  }, okText))));
};

Modal.propTypes = {
  visible: _propTypes.default.bool,
  type: _propTypes.default.number,
  okText: _propTypes.default.string,
  onOk: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  cancelText: _propTypes.default.string,
  title: _propTypes.default.string,
  detail: _propTypes.default.string,
  contentText: _propTypes.default.string,
  contentNode: _propTypes.default.node,
  btnStyle: _propTypes.default.number
};
var _default = Modal;
exports.default = _default;