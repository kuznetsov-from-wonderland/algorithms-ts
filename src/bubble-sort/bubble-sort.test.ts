import { swap, bubbleSort } from './bubble-sort'

describe('swap ES6', () => {
  test('should swap array elements', () => {
    const arr = [1, 5, 16, 20, 's']
    swap(arr, 0, 4)
    expect(arr).toEqual(['s', 5, 16, 20, 1])
  })
  test('bubblesort', () => {
    const arr = [1, 5, 16, 20, 2, 0, -1, -100, 19, 19]
    const sortedArr = bubbleSort(arr)
    expect(sortedArr.length).toEqual(arr.length)
    expect(sortedArr).toEqual([-100, -1, 0, 1, 2, 5, 16, 19, 19, 20])
  })
})
