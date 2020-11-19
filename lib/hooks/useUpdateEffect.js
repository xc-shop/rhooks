"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useUpdateEffect = function (fn) {
    react_1.useEffect(function () { return fn(); });
};
exports.default = useUpdateEffect;
