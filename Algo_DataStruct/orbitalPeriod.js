/**
 * 
 * @param {*} arr 
 * @returns 
 * GM and earthRadius are both given to us.
 * 1- Create newArr to store the orbPeriod's.
 * 2 -a is 2 times pi. The part that is a constant
 *  is on the global scope while the rest is part of a function.
 * 3-Create a function, gerOrbPeriod() that will do
 *  the required work for any amount of objects.
 * 4-c is (earthRadius + avgAlt) to the cube.
 * 5- b is the square root of c divided by GM.
 * 6- Create orbPeriod to store the product of a and b, 
 * with the Math.round() function applied to round up to the next whole number.
 * 7- Then we delete the key avgAlt, and add the new key and its value.
 */
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbitPeriod = function (obj) {
    let c = Math.pow(earthRadius + obj.avgAlt, 3);
    let b = Math.sqrt(c / GM);
    const orbtPeriod = Math.round(a * b);
    return { name: obj.name, orbitalPeriod: orbtPeriod };
  };

  for (let i in arr) {
    newArr.push(getOrbitPeriod(arr[i]));
  }
  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

//solution 2

function getOrbitPeriod(arr) {
    
}
