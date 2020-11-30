"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
require("./App.css");
var hooks_1 = require("../lib/hooks");
function App() {
    var _a = react_1.useState(1), value = _a[0], setValue = _a[1];
    var getNum = function (num) {
        console.log('num>>>', num);
    };
    var _b = hooks_1.useSpinEdit(0, getNum), num = _b.num, handleAddClick = _b.handleAddClick, handleSubClick = _b.handleSubClick;
    var handleAddClickfn = hooks_1.useDebounce(function () {
        handleAddClick();
    }, 2000);
    hooks_1.useMount(function () {
        console.log('111>>>');
        setValue(2);
    });
    hooks_1.useUnMount(function () {
        document.write('<h1>Hello, hooks</h1>');
    });
    hooks_1.useUpdateEffect(function () {
        document.addEventListener('DOMContentLoaded', function () {
            console.log('3 seconds passed');
        });
    });
    var oldVal = hooks_1.usePrevious(value);
    console.log('>>>', value, oldVal);
    hooks_1.useTitle('测试titile');
    hooks_1.useTitle('我要测试titile', {
        restoreOnUnmount: true
    });
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("div", { onClick: handleAddClickfn }, "+"),
        num,
        react_1.default.createElement("div", { onClick: handleSubClick }, "-")));
}
;
exports.default = App;
