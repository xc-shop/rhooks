"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useDebounce = function (fn, wait, args) {
    if (args === void 0) { args = []; }
    var debounce = function () {
        var timer = setTimeout(fn.bind(null, args), wait);
        return function () {
            clearTimeout(timer);
        };
    };
    return debounce;
};
exports.default = useDebounce;
