import { useState, useEffect} from 'react'

const useKeyPress = (targetKeyCode: number) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const keyDownHandler = ({ keyCode }: {keyCode: number}) => {
    if (keyCode === targetKeyCode) {
      setKeyPressed(true)
    }
  }

  const keyUpHandler = ({ keyCode }: {keyCode: number}) => {
    if (keyCode === targetKeyCode) {
      setKeyPressed(false)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.removeEventListener('keyup', keyUpHandler)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // 只在页面加载和卸载时执行

  return keyPressed
}

export default useKeyPress
