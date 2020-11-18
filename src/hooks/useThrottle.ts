import { useEffect } from 'react'

const useThrottle = (fn: Function, wait: number, args: any[] = []) => {

  useEffect(() => {
    let activeTime = 0,
      nowTime = Date.now()

    if (nowTime - activeTime > wait) {
      fn.bind(null, args)
      activeTime = Date.now()
    } 
  }, [])
}

export default useThrottle