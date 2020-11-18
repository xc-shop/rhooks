import { useState } from 'react'

const useSpinEdit = (initValue: number = 0, fn: Function) => {
  const [num, setNum] = useState(initValue)

  /**
   * 处理点击加的函数
   */
  const handleAddClick = () => {
    // 这里是返回数字，所以需要使用上一次的state, 同步的方式
    setNum(prevState => {
      const tmpState = prevState + 1
      fn(tmpState)
      return tmpState
    })
  }

  /**
   * 处理点击减的函数
  */
  const handleSubClick = () => {
    setNum(prevState => {
      const tmpState = prevState - 1
      fn(tmpState)
      return tmpState
    })
  }

  return {
    num,
    handleAddClick,
    handleSubClick
  }
}

export default useSpinEdit