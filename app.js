function generateFibonacci(n) {
  if (n <= 0) {
    return []
  } else if (n === 1) {
    return [0]
  } else if (n === 2) {
    return [0, 1]
  }

  const fibonacciSequence = [0, 1]

  for (let i = 2; i < n; i++) {
    const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
    fibonacciSequence.push(nextFibonacci)
  }

  return fibonacciSequence
}

const number = 5
const result = generateFibonacci(number)
console.log(result) // Output: [0, 1, 1, 2, 3]
