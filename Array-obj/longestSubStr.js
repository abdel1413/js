function longestSubString(str) {
  let subStr = str.split(" ");
  let currentLength = 0;
  for (let i = 0; i < subStr.length; i++) {
    if (subStr[i].length > currentLength) {
      currentLength = subStr[i].length;
    }
  }
  return currentLength;
}

longestSubString("The quick brown fox jumped over the lazy dog");

//use split and map:
// spread mthd to copy all the content of the
//array then split it then use map method to
//access every elt in the split array.
// surround with Math.max to output the max substring
function lengthSub(st) {
  return Math.max(...st.split(" ").map((w) => w.length));
}

//Use split and reduce(start, substr) then
//use Math.max to ouput the longest word
function lgSubString(st) {
  return st.split(" ").reduce((longest, wd) => Math.max(longest, wd.length), 0);
}
