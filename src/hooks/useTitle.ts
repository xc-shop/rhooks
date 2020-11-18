import { useEffect, useRef } from 'react'

interface UseTitleOptions {
  restoreOnUnmount?: boolean
}

const DEFAULT_TITLE_OPTIONS = {
  restoreOnUnmount: false
}

const useTitle = (title: string,  options: UseTitleOptions
  = DEFAULT_TITLE_OPTIONS) => {
  const prevTitle = useRef(document.title)

  useEffect(() => {
    document.title = title
    if (options && options.restoreOnUnmount) {
      return () => {
        document.title = prevTitle.current
      }
    } else {
      return
    }
  }, [])
}

export default useTitle