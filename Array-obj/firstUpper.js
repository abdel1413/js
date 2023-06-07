function firsLetterUpper(str) {
  let arr = str.split(" ");
  let subStr,
    newArr = [],
    upper = "";
  for (let i = 0; i < arr.length; i++) {
    subStr = arr[i];
    upper = subStr[0].toUpperCase();
    for (let j = 1; j < subStr.length; j++) {
      upper += subStr[j].toLowerCase();
    }
    newArr.push(upper);
  }
  return newArr.join(" ");
}
