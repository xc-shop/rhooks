import React, { useState } from 'react';
import './App.css';
import {
  useSpinEdit,
  useDebounce,
  useThrottle,
  useMount,
  useUnMount,
  useUpdateEffect,
  useTitle,
  usePrevious
} from '../lib/hooks'

function App() {
  const [value, setValue] = useState<number>(1)

  const getNum = (num: number) => {
    console.log('num>>>', num);
  }

  const {
    num,
    handleAddClick,
    handleSubClick
  } = useSpinEdit(0, getNum)


  const handleAddClickfn = useDebounce(
    () => {
      handleAddClick()
    },
    2000
  );

  useMount(() => {
    console.log('111>>>');
    setValue(2)
  })

  useUnMount(() => {
    document.write('<h1>Hello, hooks</h1>')
  })

  useUpdateEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('3 seconds passed');
    });
  })

  const oldVal = usePrevious(value)
  console.log('>>>', value, oldVal);

  useTitle('测试titile')
  useTitle('我要测试titile', {
    restoreOnUnmount: true
  })

  return (
    <div className="App">
      <div onClick={handleAddClickfn}>+</div>
        {num}
      <div onClick={handleSubClick}>-</div>
    </div>
  );
};

export default App;
