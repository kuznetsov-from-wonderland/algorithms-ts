const swap = <T>(arr: T[], idx1: number, idx2: number) => {
  ;[arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]]
}

const bubbleSort = <T>(arr: T[]): T[] => {
  const shallowCopy = [...arr]
  for (let i = shallowCopy.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (shallowCopy[j] > shallowCopy[j + 1]) {
        swap(shallowCopy, j, j + 1)
      }
    }
  }
  return shallowCopy
}

const bubbleSortFastest = <T>(arr: T[]): T[] => {
  const shallowCopy = [...arr]
  let hasMadeAtLeastOneSwap: boolean
  for (let i = shallowCopy.length; i > 0; i--) {
    hasMadeAtLeastOneSwap = false
    for (let j = 0; j < i - 1; j++) {
      if (shallowCopy[j] > shallowCopy[j + 1]) {
        swap(shallowCopy, j, j + 1)
        hasMadeAtLeastOneSwap = true
      }
    }
    if (!hasMadeAtLeastOneSwap) {
      break
    }
  }
  return shallowCopy
}

export { swap, bubbleSort, bubbleSortFastest }
