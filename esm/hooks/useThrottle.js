import { useEffect } from 'react';
var useThrottle = function (fn, wait, args) {
    if (args === void 0) { args = []; }
    useEffect(function () {
        var activeTime = 0, nowTime = Date.now();
        if (nowTime - activeTime > wait) {
            fn.bind(null, args);
            activeTime = Date.now();
        }
    }, []);
};
export default useThrottle;
