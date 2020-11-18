import { useEffect } from 'react'

const useDebounce = (fn: Function, wait: number, args: any[] = []) => {

  const debounce = () => {
    const timer: NodeJS.Timeout = setTimeout(fn.bind(null, args), wait)
    return () => {
      clearTimeout(timer)
    }  
  }

  return debounce
}

export default useDebounce