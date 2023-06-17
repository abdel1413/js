/**
 *
 * @param {*} arr
 * This function takes an arr
 * (May be 2 or more arg)
 * the return new arr without repeatation of items
 */
function noRepeat(arr) {
  //create an empty arr to store values
  let newA = [];
  for (let i = 0; i < arguments.length; i++) {
    let args = arguments[i];
    //loop over the args
    for (let j of args) {
      // if(!newA.includes(j)) newA.push(j)
      if (newA.indexOf(j) < 0) {
        newA.push(j);
      }
    }
  }
  return newA;
}

//solution 2
function noRepeat(...arr) {
  //use flat() to flatten the arrays
  // use set() method to clear all the repeated items
  return [...new Set(arr.flat())];
}

//solution 3
function noRepeat(arr) {
  // use object arguments inside the arr
  //then flat() it
  //then use filter taking item index and arr as params
  // to check if item and index from arr as the same using
  //indeOf() method
  return [...arguments]
    .flat()
    .filter((item, index, arr) => arr.indexOf(item) === index);
}
