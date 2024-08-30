function fibs (n) {
  let array = []
  let a = 1
  let b = 0
  let c
  for (let i = 0; i < n; i++) {
    array.push(b)
    c = a + b
    a = b
    b = c
  }
  return array
}

function fibRec (n) {
  let array = [0, 1]
  if (n == 0) return 0
  if (n == 1) return 1
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 2] + array[i - 1]
  }
  return array
}

console.log(fibRec(5))
