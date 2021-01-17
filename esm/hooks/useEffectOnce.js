import { useEffect } from 'react';
var useEffectOnce = function (fn) {
    useEffect(function () { return fn(); }, []);
};
export default useEffectOnce;
