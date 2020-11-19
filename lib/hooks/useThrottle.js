"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useThrottle = function (fn, wait, args) {
    if (args === void 0) { args = []; }
    react_1.useEffect(function () {
        var activeTime = 0, nowTime = Date.now();
        if (nowTime - activeTime > wait) {
            fn.bind(null, args);
            activeTime = Date.now();
        }
    }, []);
};
exports.default = useThrottle;
