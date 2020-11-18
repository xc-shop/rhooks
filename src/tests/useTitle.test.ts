import { act, renderHook } from '@testing-library/react-hooks'
import { useTitle } from '../hooks/index'

describe('useTitle', () => {
  test('newest title', () => {
    const { result } = renderHook(() => useTitle('测试titile'))

    expect(result.current).toBe(undefined)
  })

  // test('prev title', () => {
  //   const { result } = renderHook(() => useTitle('我要测试titile', {
  //     restoreOnUnmount: true
  //   }))

  //   expect(result.current).toBe(undefined)
  // })
})