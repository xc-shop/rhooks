declare const useDebounce: (fn: Function, wait: number, args?: any[]) => () => () => void;
export default useDebounce;
