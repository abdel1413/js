function insertTo(arr1, arr2, index) {
  let n = arr2.slice();
  //insert arr1 elt into n using splice()
  n.splice(n, 0, ...arr1);
  return n;
}

//or we can use spread operato

function insert(arr1, arr2, i) {
  //copy elts of arr2 using slice() from 0 up to n(exlusive);
  // copy arr1 using spread op
  // copy elt of arr2 using slice from n to end
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
