"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _datePickerStyle = _interopRequireDefault(require("./datePickerStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var setYear = '';
var setMonth = '';
var setDay = '';
var today = new Date();

function tbb(n) {
  return n < 10 ? '0' + n : '' + n;
}

function monthDays(date) {
  //获取月份的总天数
  var curDate = date ? new Date(date) : new Date();
  var year = curDate.getFullYear();
  var month = curDate.getMonth() + 1;
  var d = new Date(year, month, 0); //  console.log(typeof d.getDate());

  return d.getDate();
}

monthDays('2019-10-01');

var DatePicker = _react.default.forwardRef(function (props, ref) {
  var value = props.value,
      placeholder = props.placeholder,
      titleName = props.titleName,
      defaultValue = props.defaultValue,
      wrongText = props.wrongText,
      onChange = props.onChange,
      maxLength = props.maxLength,
      width = props.width,
      insideWidth = props.insideWidth,
      invalid = props.invalid,
      hasDay = props.hasDay,
      name = props.name;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      selectValue = _useState2[0],
      setSelectVlue = _useState2[1]; // 


  var _useState3 = (0, _react.useState)(-100),
      _useState4 = _slicedToArray(_useState3, 2),
      yearIndex = _useState4[0],
      setYearIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(-100),
      _useState6 = _slicedToArray(_useState5, 2),
      monthIndex = _useState6[0],
      setMonthIndex = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isShow = _useState8[0],
      setIsShow = _useState8[1]; // 显示隐藏


  (0, _react.useEffect)(function () {
    document.body.addEventListener('click', function (e) {
      if (e.target && e.target.matches('li')) {
        return;
      }

      setIsShow(false);
    });
    setSelectVlue(value);
  }, [value]);

  var year = function year() {
    var years = new Date().getFullYear();
    var arr = []; // if(props.type === 'now'){
    //   arr = [...arr, 'now']
    // }
    // if(props.type === 'noExp'){
    //   arr = [...arr, 'noExp']
    // }

    if (props.type === 'gTime') {
      years = Number(years) + 5;
    }

    for (var i = years; i >= 1966; i--) {
      arr = [].concat(_toConsumableArray(arr), [i]);
    }

    return _react.default.createElement("ul", {
      className: "scrollbar"
    }, props.type && props.type !== "gTime" && _react.default.createElement("li", {
      onClick: function onClick() {
        return onChange([props.type]);
      }
    }, props.type), arr.map(function (item, index) {
      return _react.default.createElement("li", {
        key: index,
        className: index === yearIndex ? "actived" : "",
        onClick: function onClick(e) {
          e.stopPropagation();
          onChange([item]); // setIsShow(false);

          setYearIndex(index);
          setYear = String(item);
        }
      }, item);
    }));
  };

  var month = function month() {
    var months = 12;

    if (today.getFullYear() === Number(setYear) && props.type !== 'gTime') {
      months = today.getMonth() * 1 + 1;
    }

    var arr = []; // console.log(`months: ${months}`)

    for (var i = 1; i <= months; i++) {
      arr = [].concat(_toConsumableArray(arr), [tbb(i)]);
    } // console.log(arr);


    return _react.default.createElement("ul", {
      className: "scrollbar"
    }, arr.map(function (item, index) {
      return _react.default.createElement("li", {
        key: index,
        className: monthIndex === index && yearIndex !== -100 ? "actived" : "",
        style: {
          color: yearIndex === -100 ? "#ccc" : ""
        },
        onClick: function onClick(e) {
          e.stopPropagation();

          if (yearIndex !== -100) {
            setMonth = String(item);
            setMonthIndex(index);

            if (!hasDay) {
              onChange([setYear, setMonth]);
              setIsShow(false);
            }
          }
        }
      }, item);
    }));
  };

  var day = function day() {
    var days = 30;
    var d = monthDays("".concat(setYear, "-").concat(setMonth));
    var arr = [];

    if (!isNaN(d)) {
      days = d;
    }

    for (var i = 1; i <= days; i++) {
      arr = [].concat(_toConsumableArray(arr), [tbb(i)]);
    }

    return _react.default.createElement("ul", {
      className: "scrollbar"
    }, arr.map(function (item, index) {
      return _react.default.createElement("li", {
        key: item,
        style: {
          color: monthIndex === -100 ? "#ccc" : ""
        },
        onClick: function onClick(e) {
          e.stopPropagation();

          if (yearIndex !== -100 && monthIndex !== -100) {
            setDay = String(item);
            onChange([setYear, setMonth, setDay]);
            setIsShow(false);
          }
        }
      }, item);
    }));
  };

  return _react.default.createElement(_datePickerStyle.default, {
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
      if (!invalid) {
        setIsShow(!isShow);
        setYear = [];
        setMonth = [];
        setDay = [];
        setYearIndex(-100);
        setMonthIndex(-100);
      }
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
  }, year(), month(), hasDay && day())))), _react.default.createElement("p", {
    className: "wrongText",
    style: {
      display: wrongText ? "block" : "none"
    }
  }, wrongText));
});

var _default = DatePicker;
exports.default = _default;
_datePickerStyle.default.defaultProps = {
  type: "text",
  col: 1,
  placeholder: '请选择',
  onChange: function onChange() {},
  rightIconOnClick: function rightIconOnClick() {}
};