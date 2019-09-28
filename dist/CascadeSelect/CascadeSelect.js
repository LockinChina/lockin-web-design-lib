"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cascadeSelectStyle = _interopRequireDefault(require("./cascadeSelectStyle"));

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var labelObj = [];
var valueObj = [];

var CascadeSelect = _react.default.forwardRef(function (props, ref) {
  var value = props.value,
      placeholder = props.placeholder,
      titleName = props.titleName,
      defaultValue = props.defaultValue,
      wrongText = props.wrongText,
      onChange = props.onChange,
      maxLength = props.maxLength,
      width = props.width,
      dataApi = props.dataApi,
      col = props.col,
      insideWidth = props.insideWidth,
      invalid = props.invalid,
      name = props.name;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      selectValue = _useState2[0],
      setSelectVlue = _useState2[1]; // 


  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectData = _useState4[0],
      setSelectData = _useState4[1]; // 数据源


  var _useState5 = (0, _react.useState)(-100),
      _useState6 = _slicedToArray(_useState5, 2),
      indexOne = _useState6[0],
      setIndexOne = _useState6[1]; //第一级索引


  var _useState7 = (0, _react.useState)(-100),
      _useState8 = _slicedToArray(_useState7, 2),
      indexTwo = _useState8[0],
      setIndexTwo = _useState8[1]; // 第二级索引


  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isShow = _useState10[0],
      setIsShow = _useState10[1]; // 显示隐藏


  (0, _react.useEffect)(function getSelectData() {
    if (dataApi) {
      if (typeof dataApi === 'string') {
        _axios.default.get(dataApi).then(function (res) {
          var data = res.data;
          setSelectData(data);
        }).catch(function (erro) {
          console.log(erro);
        });
      } else {
        setSelectData(dataApi);
      }
    }
  }, [dataApi]);
  (0, _react.useEffect)(function () {
    document.body.addEventListener('click', function (e) {
      if (e.target && e.target.matches('li')) {
        return;
      }

      setIsShow(false);
    });
    setSelectVlue(value);
  }, [value]);

  var firstClick = function firstClick(e, item, index) {
    e.stopPropagation();
    labelObj[0] = item.label;
    var children = selectData[index].children;

    if (children && children.length !== 0) {
      setIndexOne(index);
      setIndexTwo(-100);
    } else {
      valueObj = item.value;
      setIsShow(false);
      onChange(labelObj, valueObj);
      console.log(labelObj, valueObj);
    }
  };

  var secondClick = function secondClick(e, item, index) {
    e.stopPropagation();
    labelObj[1] = item.label;
    console.log(_typeof(labelObj));
    var children = selectData[indexOne].children[index].children;

    if (children && children.length > 0) {
      setIndexTwo(index);
      console.log("\u7B2C\u4E8C\u7EC4index\uFF1A ".concat(index, ", \u7B2C\u4E8C\u7EC4indexTwo: ").concat(indexTwo));
    } else {
      setIsShow(false);
      valueObj = item.value;
      onChange(labelObj, valueObj);
      setIndexOne(-100);
    }
  };

  var thirdClick = function thirdClick(e, item, index) {
    e.stopPropagation();
    labelObj[2] = item.label;
    valueObj = item.value;
    console.log(labelObj, valueObj);
    onChange(labelObj, valueObj);
    setIsShow(false);
    setIndexTwo(-100);
    setIndexOne(-100);
  };

  return _react.default.createElement(_cascadeSelectStyle.default, {
    style: {
      width: "".concat(width, "px")
    }
  }, _react.default.createElement("p", {
    className: "title",
    style: {
      display: titleName ? 'block' : 'none'
    }
  }, titleName), _react.default.createElement("div", {
    className: "box",
    style: {
      position: "relative"
    }
  }, _react.default.createElement("div", {
    className: "inputBody fadeAnim " + (isShow ? "openActive " : "") + (wrongText ? "textWrong " : "") + (invalid ? "invalid " : ""),
    onClick: function onClick(e) {
      if (!invalid) setIsShow(!isShow);
      labelObj = [];
    }
  }, _react.default.createElement("input", {
    disabled: "disabled",
    defaultValue: defaultValue,
    placeholder: placeholder,
    className: "text ",
    maxLength: maxLength,
    readOnly: "readOnly",
    value: selectValue,
    ref: ref,
    name: name
  }), _react.default.createElement("span", {
    className: "iconfont arrow " + (isShow ? "iconshouhui" : "iconxiala1"),
    style: {
      color: isShow ? "#005ED4" : ""
    }
  }), _react.default.createElement("div", {
    className: "select-box animated-fast fadeInDown",
    style: {
      display: isShow ? 'block' : 'none'
    }
  }, _react.default.createElement("div", {
    className: "rowbox",
    style: {
      width: "".concat(insideWidth, "px")
    }
  }, _react.default.createElement("ul", {
    className: "scrollbar col".concat(col)
  }, selectData.map(function (item, index) {
    return _react.default.createElement("li", {
      className: indexOne === index ? "actived" : "",
      key: item.value,
      onClick: function onClick(e) {
        firstClick(e, item, index);
      }
    }, item.label);
  })), indexOne !== -100 && _react.default.createElement("ul", {
    className: "scrollbar col".concat(col),
    style: {
      borderRight: col === 3 ? "1px solid #E8E8E8" : ""
    }
  }, indexOne >= 0 && selectData[Number(indexOne)].children.map(function (item, index) {
    return _react.default.createElement("li", {
      className: indexTwo === index ? "actived" : "",
      key: item.value,
      onClick: function onClick(e) {
        secondClick(e, item, index);
      }
    }, item.label);
  })), indexTwo !== -100 && indexOne !== -100 && _react.default.createElement("ul", {
    className: "scrollbar col".concat(col)
  }, indexTwo >= 0 && indexOne >= 0 && selectData[Number(indexOne)].children[Number(indexTwo)].children.map(function (item, index) {
    return _react.default.createElement("li", {
      key: item.value,
      onClick: function onClick(e) {
        thirdClick(e, item, index);
      }
    }, item.label);
  })))))), _react.default.createElement("p", {
    className: "wrongText",
    style: {
      display: wrongText ? "block" : "none"
    }
  }, wrongText));
});

CascadeSelect.defaultProps = {
  type: "text",
  col: 1,
  placeholder: '请选择',
  onChange: function onChange() {},
  rightIconOnClick: function rightIconOnClick() {}
};
CascadeSelect.propTypes = {
  // value: PropTypes.oneOfType([ PropTypes.string, PropTypes.object]),
  placeholder: _propTypes.default.string,
  titleName: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  wrongText: _propTypes.default.string,
  onChange: _propTypes.default.func,
  maxLength: _propTypes.default.number,
  width: _propTypes.default.number,
  // dataApi: PropTypes.oneOfType([ PropTypes.string, PropTypes.object]),
  col: _propTypes.default.number,
  insideWidth: _propTypes.default.number,
  invalid: _propTypes.default.bool,
  name: _propTypes.default.node
};
var _default = CascadeSelect;
exports.default = _default;