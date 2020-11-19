declare function useAsyncState<T>(initialValue: T): (T | ((x: T) => Promise<unknown>))[];
export default useAsyncState;
