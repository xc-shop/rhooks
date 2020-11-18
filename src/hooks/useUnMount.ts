import useEffectOnce from './useEffectOnce'

const useUnMount = (fn: Function) => {
  useEffectOnce(() => () => fn())
}

export default useUnMount