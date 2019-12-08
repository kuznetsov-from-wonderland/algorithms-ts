import { countdownIterative, countdownRecursive } from './countdown'

const spy = jest.spyOn(console, 'log').mockImplementation()

afterAll(() => {
  spy.mockRestore()
})

test('should countdown', () => {
  countdownIterative(5)
  expect(spy).toHaveBeenCalledTimes(6)
  spy.mockReset()
})

test('should countdown', () => {
  countdownRecursive(5)
  expect(spy).toHaveBeenCalledTimes(6)
})
