import { swap } from './bubble-sort'

describe('swap ES6', () => {
  test('should swap array elements', () => {
    const arr = [1, 5, 16, 20, 's']
    swap(arr, 0, 4)
    expect(arr).toEqual(['s', 5, 16, 20, 1])
  })
})
