//independent function that return a string
let string = () => "green tea";

//function that will take num of tea cup require and return
//an array of function string

const getTea = (numOfCup) => {
  let teaCups = [];
  for (let i = 1; i <= numOfCup; i++) {
    let cupString = string();
    teaCups.push(cupString);
  }
  return teaCups;
};

getTea(40);
