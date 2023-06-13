/**
 *
 * @param {*} arr1
 * @param {*} arr2
 * concat those 2 arrays
 * filter out items that do not exist in either on both arrays
 *
 */
function differArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

//solution 2
//create an inner function taking two args
// loop over one of them and check if any elen in it has its
//index in the other . If not then push it to the newArray
function diff(arr1, arr2) {
  let newAr = [];
  function inner(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) === -1) {
        newAr.push(a[i]);
      }
    }
  }
  inner(arr1, arr2);
  inner(arr2, arr1);
  return newAr;
}

//solution 3
//Use inner function with filter
function differ(ar1, ar2) {
  return [...inner(ar1, ar2), ...inner(ar2, ar1)];
  function inner(a, b) {
    return a.filter((i) => b.indexOf(i) === -1);
  }
}
