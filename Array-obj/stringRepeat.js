// create an empty string to

function stringRepeat(str, num) {
  let s = "";
  for (let i = 0; i < num; i++) {
    if (num === 1) {
      return str;
    } else if (num < 0) {
      return "";
    } else {
      s += str;
    }
  }
  return s;
}
