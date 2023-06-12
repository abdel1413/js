const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

/**
 *
 * @param {*} arr
 * @param {*} bookName
 * copy the global arr and work of it without altering
 *
 */
function addBookName(arr, bookName) {
  let copiedArr = arr.slice();
  copiedArr.push(bookName);
  return copiedArr;
}

//remove book  from the array based on the given book name
function removeBook(arr, bookName) {
  //copy global arr
  let bList = arr.slice();
  //find the index of book you want to remove from the
  //book list.
  let bookIndex = bList.indexOf(bookName);
  if (bookIndex !== -1) {
    bList.splice(bookIndex, 1);
  }
  return bList.length;
}
