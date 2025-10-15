function fib(n, prevValues = []) {
  if (prevValues[n] !== null) {
  }
  if (n <= 1) {
    prevValues[n] = n;
    return n;
  } else {
    const result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
    prevValues[n] = result;
    return result;
  }
}

console.log(fib(100));
a