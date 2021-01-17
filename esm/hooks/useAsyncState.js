import { useState } from 'react';
function useAsyncState(initialValue) {
    var _a = useState(initialValue), value = _a[0], setValue = _a[1];
    var setter = function (x) {
        return new Promise(function (resolve) {
            setValue(x);
            resolve(x);
        });
    };
    return [value, setter];
}
export default useAsyncState;
