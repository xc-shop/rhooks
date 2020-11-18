import { useEffect } from 'react'

const useEffectOnce = (fn: Function) => {
  useEffect(() => fn(), [])
}

export default useEffectOnce