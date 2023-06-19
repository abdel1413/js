/**
 * 
 * @param {*} array 
 * @returns 
 * 1 - Create a new variable to keep flattened arrays.
  2- Loop over the elements of the array
 3- check if the element is an array then call the 
 function again with to flatten the subarray and push the contents
  of the flattened subarray into the flattened array.
4- If the element is not an array, then push that 
non-array element to the flattened array.
5- Return the flattened array.
 */
function flattened(array) {
  let newA = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newA.push(...flattened(array[i]));
    } else {
      newA.push(array[i]);
    }
  }
  return newA;
}

//Solution 2
//1- use spread op and concat method to copy the arr into a new array
// 2 use Array.some method to check if some of elts are
//subarray using Array.isArray() methd
//3-  if so, then call function again to repeat the action
//4- if not then return the copied array

function flatten(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? flatten(flat) : flat;
}

//solution 3;
//1-we can pass an empty array as default param
//2-use forEach methd to check if any element in arr is subarray
// 3- if so, then call function for recursive action
//4- if not, jus push the element into default arr
function flatten(arr, defautArr = []) {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattened(element, defautArr);
    } else {
      defautArr.push(element);
    }
  });
  return defautArr;
}

flatten([1, [2], [3, [[4]]]]);
