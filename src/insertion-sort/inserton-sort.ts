const insertionSort = <T>(arr: T[]): T[] => {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i]
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
      arr[j] = currentValue
    }
  }
  return arr
}

export { insertionSort }
