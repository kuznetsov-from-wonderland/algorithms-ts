import { naiveSearch } from './string-search'

describe('string search', () => {
  test('should return a count', () => {
    const res = naiveSearch('lorie loled', 'lol')
    expect(res).toEqual(1)
  })
  test('should return a count', () => {
    const res = naiveSearch('harold said haha in hamburg', 'ha')
    expect(res).toEqual(4)
  })
})
