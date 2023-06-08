/**
 *
 * @param {*} arr
 * check if the second item in the arr has all the element is
 * the first item
 * 1) assign the first elem to a variable then convert to lower
 * 2) loop thru the remaining  element of array;
 * 3) assign each item to a varible after conversion to lower
 * 4) loop again thru that variable
 * 5) check if each element if that varable is included/hasIndex
 *   in  the first item;
 *
 */
function mutation(arr) {
  let first = arr[0].toLowerCase();
  for (let i = 1; i < arr.length; i++) {
    let second = arr[i].toLowerCase();

    for (let j = 0; j < second.length; j++) {
      if (!first.includes(second[j])) return false;
    }
    return true;
  }
}

//Using indexOf to check if the index of each element
// in second substring exist in first one
function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) return false;
  }
  return true;
}

//using every method
function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase().split("");
  return second.every((e) => first.indexOf(e) !== -1);
}
