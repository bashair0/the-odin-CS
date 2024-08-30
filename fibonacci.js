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
  return n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2)
}

function arrayOfFibonacci (n) {
  let array = []
  for (let i = 0; i < n; i++) {
    array[i] = fibRec(i)
  }
  return array
}

console.log(arrayOfFibonacci(7))
