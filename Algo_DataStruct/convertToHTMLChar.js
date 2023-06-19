/**
 * 
 * @param {*} str 
 *1 - Assign a var splitte to str.split(''),
 *  which creates an array containing each individual 
 * character in the passed in string.
 2- Pass each character in the newly created array into a switch() statement.
 3 - Replace the HTML entities with their corresponding HTML entity string (i.e. '&' becomes '&amp;' in line 51)
 4 - temp.join('') converts the array of characters into a string to be returned.
 */
function convertToHTMLChar(str) {
  let splitted = str.split("");
  for (let i = 0; i < splitted.length; i++) {
    switch (splitted[i]) {
      case "&":
        splitted[i] = "&amp;";
        break;
      case "<":
        splitted[i] = "&lt;";
        break;
      case ">":
        splitted[i] = "&gt;";
        break;
      case "'":
        splitted[i] = "&apos;";
        break;
      case '"':
        splitted[i] = "&quot;";
        break;
    }
  }
  return splitted.join("");
}

//Solution 2;
// 1- Create an object to use the Lookup functionality
//and easily find the characters.
//2 - Use replace() to replace characters with regex.
// 3-create  a regex that
//catches all the target characters and puts them into a capturing group.
//4 - The second arguments for replace() is a function
//with the matched character as a parameter.
//5- returns the correspondant entity from htmlEntities
function convert(str) {
  let regex = /([<>\"'&])/g;

  //look up obj
  let htmlChar = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;",
  };
  let repl = str.replace(regex, (matched) => htmlChar[matched]);
  return repl;
}
