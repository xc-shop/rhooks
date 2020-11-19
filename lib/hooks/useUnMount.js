"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var useEffectOnce_1 = tslib_1.__importDefault(require("./useEffectOnce"));
var useUnMount = function (fn) {
    useEffectOnce_1.default(function () { return function () { return fn(); }; });
};
exports.default = useUnMount;
