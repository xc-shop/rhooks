import { useState } from 'react'

function useAsyncState<T>(initialValue: T) {
  const [value, setValue] = useState(initialValue)

  const setter = (x: T) => {
    return new Promise(resolve => {
      setValue(x)
      resolve(x)
    })
  }

  return [value, setter]
}

export default useAsyncState