/**
 * 
 * @param {*} num 
 *1- Create a variable to keep record of the  current
 * 2 - creat var to keep record of previous numbers 
 * 3-create  result that will be returned.
 4 - Use a while loop to make sure we do not go over 
 the number given as parameter.
 5 -  use the modulo operand to check if the current 
number is odd or even. If it is odd, add it to the result.
6 - Complete the Fibonacci circle by rotating getting 
the next number and swapping values after.
 7-  Return the result.
 */
function fib(num) {
  let sum = 0,
    previousValue = 0,
    currentValue = 0;
  while (currentValue <= num) {
    if (currentValue % 2 === 1) {
      sum += currentValue;
    }
    currentValue += previousValue;
    previousValue = currentValue - previousValue;
  }
  return sum;
}
fib(4); //5 (1 +1+3)

//solution 3
// 1- Use three work variables to hold the the current 3 Fibonacci numbers
//2-Generate triples as long as the first odd value is less than num
// 3-Add the two odd values, f1 and f2, to the running sum
//of odd Fibonacci numbers

function fib(num) {
  let f0 = 0,
    f1 = 1,
    f2 = 1;
  let sum = 0;
  //create tripples until num is reached
  while (f1 <= num) {
    //update sum
    sum += f1;
    if (f2 <= num) sum += f2;

    //compute next 3 fibonacci numbers
    console.log("fo f1", [f0, f1])[(f0, f1)] = [f1 + f2, f2 + (f1 + f2)];
    console.log("f2", f2);
    f2 = f0 + f1;
  }
}
fib(4); //=>5
