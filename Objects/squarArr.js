/**
 *
 * @param {*} arr
 * 1- filter the array by checking if item > 0 and its not
 *  float by using remainder and parseInt() methd to return the
 * first integer
 * 2- map and apply Math.pow() mth on each item
 *
 */
function sq(arr) {
  return arr
    .filter((item) => item > 0 && item % parseInt(item) === 0)
    .map((num) => Math.pow(num, 2));
}

//we can use reduce mthd
function reducingMethod(arr) {
  return arr.reduce((first, num) => {
    return Number.isInteger(num) && num > 0 ? first.concat(num * num) : first;
  }, []);
}
