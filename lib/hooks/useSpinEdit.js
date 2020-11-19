"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useSpinEdit = function (initValue, fn) {
    if (initValue === void 0) { initValue = 0; }
    var _a = react_1.useState(initValue), num = _a[0], setNum = _a[1];
    /**
     * 处理点击加的函数
     */
    var handleAddClick = function () {
        // 这里是返回数字，所以需要使用上一次的state, 同步的方式
        setNum(function (prevState) {
            var tmpState = prevState + 1;
            fn(tmpState);
            return tmpState;
        });
    };
    /**
     * 处理点击减的函数
    */
    var handleSubClick = function () {
        setNum(function (prevState) {
            var tmpState = prevState - 1;
            fn(tmpState);
            return tmpState;
        });
    };
    return {
        num: num,
        handleAddClick: handleAddClick,
        handleSubClick: handleSubClick
    };
};
exports.default = useSpinEdit;
