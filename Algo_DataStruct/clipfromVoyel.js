/**
 *
 * @param {*} str
 * this clip string starting to a consonant to a voyel and append it or them at
 * end then add ay
 * if the string start with o, just add way at end
 * 1 create a reg exp for to handle voyels
 * 2 check if the string pass test to append way
 * 3 if not then create another reg exp to handle consonants
 * 4 clip the string start with consonant up to where a first voyel is
 * encountered using slice method.
 * 5 append it to the string's end then add ay using slice method again
 */
function clipFromVoyel(str) {
  let regEx = /[ouiea]/;
  if (regEx.test(str[0])) {
    str + "way";
  } else {
    let consRegEx = /^[^uioae]+/;
    let first = str.match(consRegEx)[0];
    str.slice(first.length).concat(str.slice(0, first.length)) + "ay";
  }
  return str;
}

clipFromVoyel("schwartz"); //artzschway
clipFromVoyel("glove"); //oveglay
clipFromVoyel("algorithm"); //algorithmway

//Solution 2
// 1 create an empty new string
// 2 create reg exp to handle vowels
// 3 check if regx pass the test
//a) if so then add 'way' to the str
//b) if null then add 'ay ' and end of string
//4 else use indexOf methd to get the index of matched element
// 5 use that index to clip strin into substr starting from index up to end
// and then app the clipped part from 0 up to index the add 'ay'

function clipped(str) {
  let regEx = /[uioea]/gi;
  let newStr = "";
  if (str[0].match(regEx)) {
    newStr = str + "way";
  } else if (str.match(regEx) === null) {
    newStr = str + "ay";
  } else {
    let index = str.indexOf(str.match(regEx)[0]);
    newStr = str.substr(index) + str.substr(0, index) + "ay";
  }
  return newStr;
}
clipped("schwartz"); //artzschway
clipped("glove"); //oveglay
clipped("algorithm"); //algorithmway
