/**
 *
 * @param {*} arr
 * 1 put everthing into lower case
 * 2 delete all the space using trim()
 * 3 use split methd to split the sentenc into substring
 * 4 join the substring using join method that take - as its arg
 */
function Url(arr) {
  let lower = arr.toLowerCase();
  let trim = lower.trim();
  let splitted = trim.split(/\s+/);
  let joined = splitted.join("-");
  return joined;
}

//use filter to filter out the empty spaces
function Url(arr) {
  return arr
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((s) => s !== "")
    .join("-");
}
