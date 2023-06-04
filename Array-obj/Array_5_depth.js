let myNestedArray = [
  ["second level"],
  [["third level"], ["third level"]],
  [[["fourth level"], ["fourth level"]]],
  [[[["fith level"], ["fith level"]]]],
];

myNestedArray[1][0].push("3 level deep");
console.log(myNestedArray[1][0]);
// ['third level' ,"3 level deep" ]
myNestedArray[2][0][0].push("4 levels deeper");
console.log(myNestedArray[2][0][0]);
//['fourth level', 4 level deeper]

myNestedArray[3][0][0][0].push("5 level deepest");
console.log(myNestedArray[3][0][0][0]);

// ['fith level', '5 level deepest']
