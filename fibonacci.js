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

console.log(fibs(5))
