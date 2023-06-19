/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 * Use a while loop with Array.prototype.shift()
 *  to continue checking and dropping the first element 
 * of the array until the function returns true. It also makes 
 * sure the array is not empty first to avoid infinite loops.
Return the filtered array.
 */
function dropElement(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

//Solution 2
//Create a for loop to check each element.
//Then check for the function given if true then stop,
//otherwise remove that element.
//return the array.

function drop(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
