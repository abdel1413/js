/**
 * 
 * @param {*} collection 
 * @param {*} pre 
 * @returns
 * 1 -  I create a counter to check how many cases are actually true.
Then check for each object if the value is truthy
 2- Outside the loop, check to see if the counter variable has 
 the same value as the length of collection, if true then return true, 
 otherwise, return false 
 */

function truthCheck(collection, pre) {
  //tracker to track how many are true
  let tracker = 0;
  //loop over to check if pre is property of collection
  //and check the truthy using Boolean methd
  for (let p in collection) {
    console.log(collection[p]);
    if (collection[p].hasOwnProperty(pre) && Boolean(collection[p][pre]))
      tracker += 1;
    //return p === pre;
  }

  //compare the tracker and the length of collection

  return tracker == collection.length;
}

truthCheck(
  [
    { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
    { name: "Code Radio", users: [{ name: "Camperbot" }] },
    { name: "", users: [] },
  ],
  "users"
);

// truthCheck([{name: "Quincy",
//role: "Founder", isBot: false},
//{ name: "Naomi", role: "", isBot: false },
//{ name: "Camperbot", role: "Bot", isBot: true }], "isBot");

//solution 2:
//1 use For every object in the collection array,
//check the truthiness of object’s property passed in pre parameter
//Array.prototype.every method internally checks if
//the value returned from the callback is truthy.
//Return true if it passes for every object. Otherwise, return false.
function truthy(collection, pre) {
  return (
    collection.every((element) => element.hasOwnProperty(pre)) &&
    Boolean(element[pre])
  );
}
