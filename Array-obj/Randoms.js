/**
 * to find the size of the range, we  do:
 * (max/last- min/first + 1)
 *
 */

//find the random numbers in a range from 7 to 11
let min = 7,
  max = 11,
  size = max - min + 1;
Math.floor(Math.random() * size);
//=> whole random number (0 to 5)
//Now if we want to get random number from 7 to 11,
//we therefore have to add the min to the result
//ie add min
Math.floor(Math.random() * size) + min;
//now it will start counting from 7 instead
//of form 0

function randomNumbers(parm1, parm2) {
  return Math.floor(Math.random() * size) + min;
}
