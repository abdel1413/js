/**
 *
 * @param {*} str
 * code to return a missing letter
 * 1- loop over
 * 2 - create a var to save the current code unit at each index
 * using charCodeAt(index)methd
 * 3- check if the currenc code in not equal to the normal order
 * ie from index 0 + number of iterations
 * 4 - if not then subtruct 1 from current code
 * 5- convert the missing code back to letter using
 * String.fromCharCode(code) mthd
 * 6- return undefined if all letters are present
 */
function missingLetter(str) {
  //loop
  for (let i = 0; i < str.length; i++) {
    //get the code unit of current index
    let charCode = str.charCodeAt(i);
    console.log("curren order", charCode);

    //get the norma order of iteration
    let normal = str.charCodeAt(0) + i;
    console.log(normal);

    //check if both charcode and normal match
    if (charCode !== normal) {
      //subtract 1 from current code unit and convert it back to letter
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

missingLetter("abce");

//Solution 2
//1-save first index to a var
// 2-create a missing var
//3- split the string
//4 use forEach to check if the first element's code is the same
//as the first one that was saved.
// a) if so, then add 1 to the save one
//b) if not then  we found the missing
// convert it back to letter and assign it to missing var created
//6-  return the missing var
//

function missingLetter(str) {
  let currenCode = str.charCodeAt(0);

  let missingL = undefined;

  str.split("").forEach((element) => {
    if (element.charCodeAt(0) === currenCode) {
      currenCode++;
    } else {
      missingL = String.fromCharCode(currenCode);
    }
  });

  return missingL;
}

missingLetter("abce");
