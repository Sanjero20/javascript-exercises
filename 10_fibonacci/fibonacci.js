const fibonacci = function(n) {
  n = Number(n);
  if (n < 0) return "OOPS";

  fib = [0, 1];
  for (let i=2; i <= n; i++) {
    fib[i] = fib[i-2] + fib[i-1];
  }
  return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
