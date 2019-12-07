function slowFib(n: number) {
  if (n < 2) return n;
  else return fib(n - 1) + fib(n - 2);
}

type Cache = {
  [key: number]: number;
};

function memoize(fn: Function): (x: number) => number {
  const cache: Cache = {};
  return function(arg: number) {
    if (cache[arg]) return cache[arg];

    const result = fn(arg);
    cache[arg] = result;

    return result;
  };
}

const fib = memoize(slowFib);

const fibIterative = (n: number) => {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[n];
};

export { fib, fibIterative };
