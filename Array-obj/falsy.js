function falsy(arr) {
  let narr = arr.slice();
  let newArr = [];
  for (let i of narr)
    if (i) {
      newArr.push(i);
    }
  return newArr;
}

//use filter and pass built-in Boolean function
//which return true/false then
//filter will fiter out the values that are false
function falsy(arr) {
  return arr.filter(Boolean);
}
