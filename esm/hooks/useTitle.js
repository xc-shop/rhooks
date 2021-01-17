import { useEffect, useRef } from 'react';
var DEFAULT_TITLE_OPTIONS = {
    restoreOnUnmount: false
};
var useTitle = function (title, options) {
    if (options === void 0) { options = DEFAULT_TITLE_OPTIONS; }
    var prevTitle = useRef(document.title);
    useEffect(function () {
        document.title = title;
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitle.current;
            };
        }
        else {
            return;
        }
    }, []);
};
export default useTitle;
