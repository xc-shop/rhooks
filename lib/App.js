"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
require("./App.css");
var _1 = require(".");
function App() {
    var _a = react_1.useState(1), value = _a[0], setValue = _a[1];
    var getNum = function (num) {
        console.log('num>>>', num);
    };
    var _b = _1.useSpinEdit(0, getNum), num = _b.num, handleAddClick = _b.handleAddClick, handleSubClick = _b.handleSubClick;
    var handleAddClickfn = _1.useDebounce(function () {
        handleAddClick();
    }, 2000);
    _1.useMount(function () {
        console.log('111>>>');
        setValue(2);
    });
    _1.useUnMount(function () {
        document.write('<h1>Hello, hooks</h1>');
    });
    _1.useUpdateEffect(function () {
        document.addEventListener('DOMContentLoaded', function () {
            console.log('3 seconds passed');
        });
    });
    var oldVal = _1.usePrevious(value);
    console.log('>>>', value, oldVal);
    _1.useTitle('测试titile');
    _1.useTitle('我要测试titile', {
        restoreOnUnmount: true
    });
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("div", { onClick: handleAddClickfn }, "+"),
        num,
        react_1.default.createElement("div", { onClick: handleSubClick }, "-")));
}
;
exports.default = App;
