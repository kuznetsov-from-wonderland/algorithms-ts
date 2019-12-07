const bubbleSort = <T>(arr: T[]): T[] => {
  return arr
}

const swap = <T>(arr: T[], idx1: number, idx2: number) => {
  ;[arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]]
}

export { swap, bubbleSort }
