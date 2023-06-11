function splitArrBySize(arr, size) {
  //create an empty array where we going to push sub arr
  let newArr = [];

  //loop thru the arr but increment i with size
  //the slice from i to size + i so that
  // it can copy right from right location
  //if i = 1 and size = 3 then slice(1,1+4 )
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

//using while loop and slice
function subArrays(arr, size) {
  let newArr = [];

  //as long as the length of array is > i
  // it keep add sub char base on the size
  //and i is incremented by size

  let i = 0;
  while (i < arr.length) {
    // copy element from arr from i to i+size
    let copy = arr.slice(i, i + size);
    //push copy into newArr
    newArr.push(copy);
    //increment i
    i += size;
  }
  return newArr;
}

//using push and splice
function subArrays(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    let ps = arr.splice(0, size);
    newArr.push(ps);
  }
  return newArr;
}
