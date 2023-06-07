//this function takes two args;
// check if the length of first is greather
//than the second;
//if so, truncate the first arg up to but not
//included then num and append '...' at the end
// which replace the remaining part of str;
//otherwise return the whole first arg
function truncate(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
