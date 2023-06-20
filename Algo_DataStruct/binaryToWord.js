/**
 *
 * @param {*} str
 * @returns
 * 1- split the string array base on whte spce
 * 2- Create some variables that you will use along the way
 *  - the names are self explanatory for the most part.
 * 3- Iterate through each binary string in the new array.
 * 4- Convert to decimal by using parseInt(_binary_, 2).
 *  Use the second parameter to specify the base of the input numbers.
 * 5- return the converted message.
 */
function binaryAgent(str) {
  //split the string into substring
  let splitted = str.split(" ");
  console.log(splitted);
  let n = [];

  for (let i = 0; i < splitted.length; i++) {
    //convert each bit string into decimal num
    //using parseInt mthd
    let decimal = parseInt(splitted[i], 2);

    //convert each decimal num into char
    n.push(String.fromCharCode(decimal));
  }
  // console.log(n)
  console.log(n.join(""));

  return n.join("");
}

//solution 2
/**
 * First we use split() to be able to work on each 
 * character as an Array element
Then use map() to process each element from binary 
to decimal using pareseInt()
Last we can use String.fromCharCode() to convert each 
ASCII number into the corresponding character
However fromCharCode() expects a series of numbers 
rather than an Array! We can use ES6 Spread Operator to
 pass in an Array of numbers as individual numbers. See 
 here for more info; Spread Operator 253
 */

function bitToWord(str) {
  return String.fromCharCode(
    ...str.split(" ").map((e) => {
      return parseInt(e, 2);
    })
  );
}
bitToWord(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
