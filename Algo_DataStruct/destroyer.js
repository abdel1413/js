/**
 *
 * @param {*} arr
 * take an arr and use Object arguments
 * to delete elements that in the array that match the
 * other params
 *
 */
function destroyer(arr) {
  //create a delet  values and store param values start from second
  //params
  let valToDelete = Object.values(arguments).slice(1);
  //create empty array
  let newA = [];

  for (let i of arr) {
    let deletFlag = false;
    for (let j of valToDelete) {
      if (i === j) {
        deletFlag = true;
      }
    }
    if (!deletFlag) {
      newA.push(i);
    }
  }
  return newA;
}

//solution 2
//creat using array like object

function destroy(arr) {
  let valToRemove = Array.from(arguments).slice(1);
  return arr.filter((v) => {
    return !valToRemove.includes(v);
  });
}

//we can use spread op as second param
//then return those elements that do no match any in array
//filter the items from array that are in arguments values
function deletElements(arr, ...valToDelete) {
  return arr.filter((item) => !valToDelete.includes(item));
}
