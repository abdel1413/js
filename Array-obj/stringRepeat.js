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

//use Recursive
function stringRp(st, num) {
  if (num < 0) {
    return "";
  }
  if (num === 0) {
    return st;
  } else {
    return st + stringRp(st, num - 1);
  }
}
