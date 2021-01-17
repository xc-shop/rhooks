import { useState } from 'react'

/**
 * @description 作用：异步设置值
 * @param initialValue 初始值
 * @interface T
 */
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