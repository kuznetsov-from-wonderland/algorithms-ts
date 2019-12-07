import { binarySearch } from './binary-search'

const states = [
  'Alaska',
  'Alabama',
  'Arkansas',
  'American Samoa',
  'Arizona',
  'California',
  'Colorado',
  'Connecticut',
  'District of Columbia',
  'Delaware',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Iowa',
  'Idaho',
  'Illinois',
  'Indiana',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Massachusetts',
  'Maryland',
  'Maine',
  'Michigan',
  'Minnesota',
  'Missouri',
  'Mississippi',
  'Montana',
  'North Carolina',
  ' North Dakota',
  'Nebraska',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'Nevada',
  'New York',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Virginia',
  'Virgin Islands',
  'Vermont',
  'Washington',
  'Wisconsin',
  'West Virginia',
  'Wyoming',
]

describe('binary search', () => {
  test('should work with numbers', () => {
    const res = binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)
    expect(res).toBe(-1)
  })
  test('should work with numbers', () => {
    const res = binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13)
    expect(res).toBe(4)
  })

  test('should work with strings', () => {
    const res = binarySearch(states, 'Kansas')
    expect(res).toBe(18)
  })
  test('should work with strings', () => {
    const res = binarySearch(states, 'none')
    expect(res).toBe(-1)
  })
})
