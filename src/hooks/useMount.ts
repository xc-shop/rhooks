import useEffectOnce from './useEffectOnce'

const useMount = (fn: Function) => {
  useEffectOnce(() => fn())
}

export default useMount