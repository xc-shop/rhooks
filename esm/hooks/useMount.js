import useEffectOnce from './useEffectOnce';
var useMount = function (fn) {
    useEffectOnce(function () { return fn(); });
};
export default useMount;
