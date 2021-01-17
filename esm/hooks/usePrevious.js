import { useEffect, useRef } from 'react';
function usePrevious(value) {
    var ref = useRef();
    useEffect(function () {
        ref.current = value;
    });
    return ref.current;
}
export default usePrevious;
