const numbers = process.argv.slice(2);
const findPrimes = (low, high) => {
  for (let i = low; i <= high; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
};
findPrimes(numbers[0] * 1, numbers[1] * 1);
