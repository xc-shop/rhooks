import { useEffect } from 'react';
var useUpdateEffect = function (fn) {
    useEffect(function () { return fn(); });
};
export default useUpdateEffect;
