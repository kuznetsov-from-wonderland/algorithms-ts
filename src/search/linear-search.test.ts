import { linearSearch } from './linear-search'

describe('linear search', () => {
  test('not found case', () => {
    const idx = linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100)
    expect(idx).toBe(-1)
  })
  test('simple case', () => {
    const idx = linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 56)
    expect(idx).toBe(6)
  })
})
