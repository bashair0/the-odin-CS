function merge (left, right) {
  let sortedArray = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }
  return [...sortedArray, ...left, ...right]
}

function mergeSort (arr) {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)

  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))
