/**
 *
 * @param {*} str
 * @returns
 * takes an string as arg
 * and return a new string where each value is shifted
 * by 13 places ignoring non alphabetic characters;
 *  1- create string holder called strinValues
 * 2- create a index value holder called indexValues
 * 3- split the string arg
 * 4- loop over each char
 * 5- check if char is non alphabetic using regEx
 *  a) if char is non alphab then just add it to indexValue
 *  b) But if it is alphabetic char and is < 77,
 *     then add 13 to indexValues
 *  c) if is > 77,  then  subtract 13 to indexValues
 * 6- conver indexValues back to chars and append them
 * stringValues
 * 7- return stringValues
 */
function Cipher13(str) {
  let stringValues = "";
  let indexValue = 0;
  let regEx = /[^A-Za-z0-9]/;
  str.split("").map((element) => {
    if (regEx.test(element)) {
      indexValue = element.charCodeAt(0);
    } else {
      if (element.charCodeAt(0) <= 77) {
        indexValue = element.charCodeAt(0) + 13;
      } else if (element.charCodeAt(0) >= 77) {
        indexValue = element.charCodeAt(0) - 13;
      }
    }
    stringValues += String.fromCharCode(indexValue);
  });
  return stringValues;
}

Cipher13("SERR CVMMN!");
Cipher13("SERR PBQR PNZC");

//solution 2

function Cipher13(str) {
  //create an array of alpha char full + 1/2
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];

  // create an empty array  to store shifted values
  let strA = [];

  for (let i = 0; i < str.length; i++) {
    //add 13 to each index of strin found in alpha array
    let shiftedStr = alphabet.indexOf(str[i]) + 13;

    // if not found ie if the index is not alpha char
    //then just push is in new arry without adding 13
    if (alphabet.indexOf(str[i]) === -1) {
      strA.push(str[i]);
    } else {
      //if found then get its shifted value from alpha and
      //push it into new array
      strA.push(alphabet[shiftedStr]);
    }
  }

  // concat the char and return
  return strA.join("");
}
