/**
 *  A function that sums two arguments together.
 *  If only one argument is provided, then return a function
 * that expects one argument and returns the sum.
 *
 */
function addToGether() {
  let [first, second] = arguments;
  // 1 - add two numbers passed as parameters and return the sum.
  //2- check if any of the numbers are actual numbers, otherwise
  //    return undefined and stop the program right there.
  if (typeof first === "number") {
    if (typeof second === "number") {
      return first + second;
    }
    //If it has only one argument then it has to return a
    //  function that uses that number and expects another one, to then add it.
    if (arguments.length === 1) return (second) => addToGether(first, second);
  }
}

//solution 2
function addToGether() {
  let [first, second] = arguments;

  function addSecond(second) {
    if (typeof second === "number") {
      return first + second;
    }
  }
  if (typeof (first === "number")) {
    if (arguments.length === 1) {
      return addSecond;
    }
    if (arguments === 2) {
      return addSecond(second);
    }
  }
}

addTogether(2, 3);
