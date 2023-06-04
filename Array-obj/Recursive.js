/**
 * function to return an array from first
 * param upto the second param inclisive;
 * check if both two param are equal then return
 * one of them in array;
 * otherwise
 * call the function on itself.
 * 1- you can increment first param by 1 and keep
 * the last one untouched
 * then return the array after pushing it in front;
 */

function rangeOfNumbers(start, end) {
  if (start === end) return [start];
  else {
    let n = rangeOfNumbers(start + 1, end);
    n.unshift(start);
    return n;
  }
}
