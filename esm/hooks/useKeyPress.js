import { useState, useEffect } from 'react';
var useKeyPress = function (targetKeyCode) {
    var _a = useState(false), keyPressed = _a[0], setKeyPressed = _a[1];
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
    useEffect(function () {
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
export default useKeyPress;
