"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var DEFAULT_TITLE_OPTIONS = {
    restoreOnUnmount: false
};
var useTitle = function (title, options) {
    if (options === void 0) { options = DEFAULT_TITLE_OPTIONS; }
    var prevTitle = react_1.useRef(document.title);
    react_1.useEffect(function () {
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
exports.default = useTitle;
