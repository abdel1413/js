/**
 *
 * @param {*} num
 * This function take a num and convert it to
 * roman numeric
 * 1- create an object  and pass
 * key/(raman num) and value(num) pairs
 * 2- create an emp string variable where to append the found value to return
 * 3- copy the num
 * 4- loop thru object
 * 5- inside the loop, loop over the param(num)
 * 6- check if num copied is >= to the value from object
 * 7- if so, then
 *  a- add i (key) to the  empty string variable
 *  b- subtrack value of object from the copied num
 * 9- return variable
 */
function converter(num) {
  let romanAraboNumeric = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let copiedNum = num;
  let romanNum = "";
  for (let i in romanAraboNumeric) {
    // //using the j variable of num, if the num is still
    //greater than the romanAraboNumeric index
    //it will increment the key to the variable
    //  romaneNum and stop the loop,
    // it will subtract the num to the values of numerals .
    for (let j = 0; j < num; j++) {
      if (copiedNum >= romanAraboNumeric[i]) {
        romanNum += i;
        copiedNum -= romanAraboNumeric[i];
      }
    }
  }
  return romanNum;
}

converter(36);
