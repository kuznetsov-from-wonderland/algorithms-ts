import { fibIterative } from './fib'
import { fib } from './fib'

describe('fibIterative', () => {
  test('got correct fib if passed 1', () => {
    expect(fibIterative(1)).toEqual(1)
  })

  test('got correct fib if passed 2', () => {
    expect(fibIterative(2)).toEqual(1)
  })

  test('got correct fib if passed 3', () => {
    expect(fibIterative(3)).toEqual(2)
  })

  test('got correct fib if passed 4', () => {
    expect(fibIterative(4)).toEqual(3)
  })

  test('got correct fib if passed 39', () => {
    expect(fibIterative(39)).toEqual(63245986)
  })
})

describe('fib', () => {
  test('got correct fib if passed 1', () => {
    expect(fib(1)).toEqual(1)
  })

  test('got correct fib if passed 2', () => {
    expect(fib(2)).toEqual(1)
  })

  test('got correct fib if passed 3', () => {
    expect(fib(3)).toEqual(2)
  })

  test('got correct fib if passed 4', () => {
    expect(fib(4)).toEqual(3)
  })

  test('got correct fib if passed 39', () => {
    expect(fib(39)).toEqual(63245986)
  })
})
