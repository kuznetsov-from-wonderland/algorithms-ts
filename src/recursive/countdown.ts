const countdownIterative = (n: number): void => {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("Done!");
};

const countdownRecursive = (n: number): void => {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  n--;
  countdownRecursive(n);
};

export { countdownIterative, countdownRecursive };
