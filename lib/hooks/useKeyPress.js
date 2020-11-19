"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useKeyPress = function (targetKeyCode) {
    var _a = react_1.useState(false), keyPressed = _a[0], setKeyPressed = _a[1];
    var keyDownHandler = function (_a) {
        var keyCode = _a.keyCode;
        if (keyCode === targetKeyCode) {
            setKeyPressed(true);
        }
    };
    var keyUpHandler = function (_a) {
        var keyCode = _a.keyCode;
        if (keyCode === targetKeyCode) {
            setKeyPressed(false);
        }
    };
    react_1.useEffect(function () {
        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);
        return function () {
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('keyup', keyUpHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // 只在页面加载和卸载时执行
    return keyPressed;
};
exports.default = useKeyPress;
