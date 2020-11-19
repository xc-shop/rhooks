"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
var react_1 = require("react");
exports.useInterval = function (callback, delay) {
    var savedCallback = react_1.useRef();
    react_1.useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    react_1.useEffect(function () {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return savedCallback.current.apply(savedCallback, args);
        };
        if (delay != null) {
            var id_1 = setInterval(handler, delay);
            return function () {
                clearInterval(id_1);
            };
        }
    }, [delay]);
};
