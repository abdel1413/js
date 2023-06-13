/**
 *
 * @param {*} arr
 * 1 conpy the original array
 * 2 use sort methd and pass callback function which take
 * two args and return a -b
 * (if a-b = 0  unchanged)
 * (if a-b < 0) b comes bf a)
 * (if a -b > 0) a comes first
 */
function ascending(arr) {
  let newA = [...arr];
  return newA.sort(function (a, b) {
    return a - b;
  });
}

function descending(arr) {
  let newA = [...arr];
  return newA.sort((a, b) => {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

function sortingAlfa(arr) {
  let n = arr.slice();
  return n.sort((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}
