function palindrome(str) {
  let regEx = /[^A-Za-z0-9]/;
  let newStr = "";

  for (let s = 0; s < str.length; s++) {
    if (!regEx.test(str[s])) {
      newStr = newStr + str[s];
    }
  }

  newStr = newStr.toLowerCase();
  newStr = newStr.split("");

  let reverse = [];

  for (let i = newStr.length - 1; i >= 0; i--) {
    reverse.push(newStr[i]);
  }
  newStr = newStr.join("");
  reverse = reverse.join("");

  return newStr === reverse;
}
palindrome("never odd or eve(),");
palindrome("eye");
