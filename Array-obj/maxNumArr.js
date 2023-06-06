function MaxNumArr(arr) {
  let n = [];

  for (let i of arr) {
    let max = -Infinity;
    for (let j of i) {
      if (j > max) {
        max = j;
      }
    }
    n.push(max);
  }
  return n;
}

//using map
function MaxNum(arr) {
  let res = [];
  arr.map((sub) => {
    let tracker = -Infinity;
    sub.map((item) => {
      if (item > tracker) {
        tracker = item;
      }
    });

    res.push(tracker);
  });
  return res;
}

//using map and reduce methods inside which we create a callback
//function;
//map will map all the items and return the a new array
//Within each inner array, we going to reduce its content
//down to singe value using reduce methd inside which we pass
//a callback function taking two args (current, prev);
//and compare them
//if the current is higher than the prev, then we set it as the
// new prev val for comparision with the next item within
//the array of return if to the map callback if it is the last
function mapReduce(arr) {
  return arr.map(function (subArr) {
    return subArr.reduce(function (current, previous) {
      return current > previous ? current : previous;
    }, -Infinity);
  });
}
