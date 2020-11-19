"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useAsyncState(initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    var setter = function (x) {
        return new Promise(function (resolve) {
            setValue(x);
            resolve(x);
        });
    };
    return [value, setter];
}
exports.default = useAsyncState;
