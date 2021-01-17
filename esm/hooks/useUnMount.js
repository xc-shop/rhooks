import useEffectOnce from './useEffectOnce';
var useUnMount = function (fn) {
    useEffectOnce(function () { return function () { return fn(); }; });
};
export default useUnMount;
