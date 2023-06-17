/**
 *
 * @param {*} str
 * 1-create a inner  function that takes each char from the input
 * 2- inside the inner function use switch statement and pass eas char as input
 *   At each case return a corresponding pair
 *   eg A => [A, T], T => [T, A], C => [C, G] , G => [G, C]
 * 3- create an empty arr to store pairs Elements
 * 4-loop over the str input then call inner funct and pass each element in
 * then push the found pairs into new array
 * 5-return newArray
 */
function baseElements(str) {
  let newArr = [];
  let innerFunction = (char) => {
    switch (char) {
      case "A":
        return ["A", "T"];
        break;
      case "T":
        return ["T", "A"];
        break;
      case "C":
        return ["C", "G"];
        break;
      case "G":
        return ["G", "C"];
        break;
    }
  };
  for (let i of str) {
    newArr.push(innerFunction(i));
  }
  return newArr;
}

//Solution 2
// 1-create an object that will allow us to easily find pairs by key of value
//2 - split the str input
//3 use map to loop over the splitted value then take each item pass it as
// key to find it value from the obje

function pairElemnts(str) {
  let pairObject = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return str.split(" ").map((item) => [item, pairObject[item]]);
}
