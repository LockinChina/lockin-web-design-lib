"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var classnames_1 = require("classnames");
var __1 = require("..");
var BubbleContent = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  width: 70%;\n  padding: 5px 0;\n  .imx {\n    width: 36px;\n    margin-right: 10px;\n    margin-left: 0px;\n  }\n  .mess {\n    .name {\n      font-size: 12px;\n      line-height: 13px;\n      margin-bottom: 5px;\n      color: #777;\n    }\n    .msgbox {\n      background: #f1f0f0;\n      padding: 13px;\n      font-size: 12px;\n      line-height: 1.5;\n      border-radius: 0px 10px 10px 10px;\n      word-break: break-all;\n      white-space: normal;\n      color: #000;\n    }\n  }\n  &.roleAt {\n    flex-direction: row-reverse;\n    float: right;\n    .imx {\n      margin-right: 0px !important;\n      margin-left: 10px;\n    }\n    .mess {\n      .name {\n        text-align: right;\n      }\n      .msgbox {\n        background: #0084ff;\n        color: #fff;\n        border-radius: 10px 0px 10px 10px;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 70%;\n  padding: 5px 0;\n  .imx {\n    width: 36px;\n    margin-right: 10px;\n    margin-left: 0px;\n  }\n  .mess {\n    .name {\n      font-size: 12px;\n      line-height: 13px;\n      margin-bottom: 5px;\n      color: #777;\n    }\n    .msgbox {\n      background: #f1f0f0;\n      padding: 13px;\n      font-size: 12px;\n      line-height: 1.5;\n      border-radius: 0px 10px 10px 10px;\n      word-break: break-all;\n      white-space: normal;\n      color: #000;\n    }\n  }\n  &.roleAt {\n    flex-direction: row-reverse;\n    float: right;\n    .imx {\n      margin-right: 0px !important;\n      margin-left: 10px;\n    }\n    .mess {\n      .name {\n        text-align: right;\n      }\n      .msgbox {\n        background: #0084ff;\n        color: #fff;\n        border-radius: 10px 0px 10px 10px;\n      }\n    }\n  }\n"])));
var Bubble = function (props) {
    var imUrl = props.imUrl, roleAt = props.roleAt, messageText = props.messageText, userName = props.userName, restProps = __rest(props, ["imUrl", "roleAt", "messageText", "userName"]);
    var classes = classnames_1["default"]('', {
        roleAt: roleAt
    });
    return (react_1["default"].createElement(BubbleContent, { className: classes },
        react_1["default"].createElement("div", { className: "im" },
            react_1["default"].createElement(__1.Image, __assign({ height: 36, width: 36, borderRadius: 36, imUrl: imUrl }, restProps))),
        react_1["default"].createElement("div", { className: "mess" },
            react_1["default"].createElement("p", { className: "name" }, userName),
            react_1["default"].createElement("div", { className: "msgbox" }, messageText))));
};
Bubble.defaultProps = {
    roleAt: false
};
exports["default"] = Bubble;
var templateObject_1;
