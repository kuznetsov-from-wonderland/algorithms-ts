import { selectionSort } from './selection-sort'

describe('swap ES6', () => {
  test('selectionSort', () => {
    const arr = [1, 5, 16, 20, 2, 0, -1, -100, 19, 19]
    const sortedArr = selectionSort(arr)
    expect(sortedArr.length).toEqual(arr.length)
    expect(sortedArr).toEqual([-100, -1, 0, 1, 2, 5, 16, 19, 19, 20])
  })
  test('selectionSort', () => {
    const arr = [1, 5, 16, 20, 2, 0, -1, -100, 19, 19]
    const sortedArr = selectionSort(arr)
    expect(sortedArr.length).toEqual(arr.length)
    expect(sortedArr).toEqual([-100, -1, 0, 1, 2, 5, 16, 19, 19, 20])
  })
})
