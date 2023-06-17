/**
 * 
 * @param {*} str 
 * // 1 split the str into substrings
  //2 check if before is in splitted string
  //3 if it is then check if firs char of before is upper or lower
   //a - if upper then replace before with after with 
   //upper first char
   //b-if it is lower and after is upper then replace after with lower first char
 */
function searchAndReplace(str) {
  let splitted = str.split();
  if (splitted.includes(before)) {
    //get the index of before in splitted
    let index = splitted.indexOf(before);
    // regular expression to check for the first char
    let regEx = /^[A-Z]/;
    if (regEx.test(before)) {
      let af = after[0].toUpperCase().concat(after.slice(1));
      splitted.splice(index, 1, af);
    } else {
      splitted.splice(index, 1, after.toLowerCase());
    }
  }
  return splitted.join(" ");
}
