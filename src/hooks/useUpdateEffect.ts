import { useEffect } from 'react'

const useUpdateEffect = (fn: Function) => {
  useEffect(() => fn())
}

export default useUpdateEffect