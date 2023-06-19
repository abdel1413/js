function smallestCommons(arr) {
  //empty ob
  let primefactor = {};

  //sort the array
  let [min, max] = arr.sort((a, b) => a - b);

  //loop  over the sorted array
  for (let i = min; i <= max; i++) {
    //factorize each num in range
    let currPrime = primeFactorFunction(i);

    // loop over the prime nums obtained from factorization
    for (let j in currPrime) {
      console.log(currPrime[j]);
      if (!primefactor[j] || currPrime[j] > primefactor[j]) {
        primefactor[j] = currPrime[j];
      }
    }
  }
  //build LCM from factorization
  let multiple = 1;
  for (let p in primefactor) {
    multiple *= p ** primefactor[p];
  }

  return multiple;
}

//create a prime factor funct
let primeFactorFunction = (num) => {
  let factors = {};
  for (let p = 2; p <= num; p++) {
    while (num % p === 0) {
      factors[p] = factors[p] ? factors[p] + 1 : 1;
      num = num / p;
    }
  }

  return factors;
};

smallestCommons([1, 5]);

//Solution 2
//1 sort the array
//2 create a range variable to store range values
// 3 get the gcd of two num
// 4 get the lcm of two num.
//5 get lcm of multiple num by using reduce method on range
function smallestCommons(arr) {
  let [min, max] = arr.sort((a, b) => a - b);

  let range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);

  let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  let lcm = (a, b) => (a * b) / gcd(a, b);

  return range.reduce((a, b) => lcm(a, b));
}
