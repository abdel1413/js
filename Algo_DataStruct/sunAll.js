function sumAll(arr) {
  let start = arr[0];
  let end = arr[arr.length - 1];
  let sumStartEnd = start + end;
  let tracker = 0;

  if (start < end) {
    for (let i = start + 1; i < end; i++) {
      tracker += i;
    }
  } else if (start > end) {
    for (let i = start - 1; i > end; i--) {
      tracker += i;
    }
  }
  return sumStartEnd + tracker;
}
sumAll([5, 10]);

//2nd solution
// get the start and end of array
//To get sum of num in range, we  can use  |a -b| +1
// Use Arithmetic Progressive  summing formula
// ((a + b)* |a -b|+ 1)/2
//return sum
function sumAll(arr) {
  let start = arr[0];
  let end = arr[1];
  let numCount = Math.abs(start - end) + 1;
  let sum = ((start + end) * numCount) / 2;
  return sum;
}

//3rd solution;
// create an accumulator;
// loop over the arry while assigning the  index to
//the min for the begining and max for the end
//increment accumulator by index
//return accumulator;
function sumAll(arr) {
  let tracker = 0;
  for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
    tracker += i;
  }
  return tracker;
}
