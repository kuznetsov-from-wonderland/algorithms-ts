import { swap } from '../bubble-sort/bubble-sort'

const selectionSort = <T>(arr: T[]): T[] => {
  const shallowCopy = [...arr]
  for (let i = 0; i < shallowCopy.length; i++) {
    let lowest = i
    for (let j = i + 1; j < shallowCopy.length; j++) {
      if (shallowCopy[lowest] > shallowCopy[j]) {
        lowest = j
      }
    }
    if (i !== lowest) swap(shallowCopy, i, lowest)
  }

  return shallowCopy
}

export { selectionSort }
