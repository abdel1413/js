/**
 *
 * @param {*} arrOfObj
 * @param {*} object
 * this funct return arr of obj if and only if
 * the second arg(obj) have the same k and v  pairs in first arg
 * 1 copy the arrOfOjb
 * 2 create an empty array
 * 3 loop thru the copied array
 * 4 set a flag to thru
 * 5 loop over the second arg (obj)
 * 6 check if any value of copied array match any value in the second arg(obj)
 * 7 set flag to false if no match
 * 8 break to exit the loop
 * 9 if flag is true then push to matched objs to empty array
 * 10  return the array
 */
function foundMatching(arrOfObj, object) {
  let copied = [...arrOfObj];
  console.log(copied);
  let newA = [];
  for (let i = 0; i < copied.length; i++) {
    let found = true;
    for (let j in object) {
      if (copied[i][j] !== object[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      newA.push(copied[i]);
    }
  }
  return newA;
}

foundMatching(
  ([
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" })
);

//Solution 2
// Get the keys from second arg
// use filter method to filter out those obj that don't match
// by applying ever mthd to array of keys from second arg
//and check if obj from collection and sencond arg (obj) have the
//sam values;
function HaveSaveObj(collection, object) {
  let keysOfOb = Object.keys(object);
  return collection.filter((obj) =>
    keysOfOb.every((key) => obj.hasOwnProperty(key) && obj[key] === object[key])
  );
}

//Solution 3
/**
 * We filter through the array using .filter().
Using a for loop we loop through each item in the object.
We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
We return false if the above if statement is correct. Otherwise, we return true;
 */

function sameObje(arrOfObj, object) {
  let objKeys = Object.keys(object);
  return arrOfObj.filter((obj) => {
    for (let key of objKeys) {
      if (obj[key] !== object[key]) return false;
    }
    return true;
  });
}
