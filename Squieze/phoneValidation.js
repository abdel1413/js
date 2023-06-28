function validate(str) {
  // require area code
  // country code may or may not be there
  // -if it has, it should be leading digit and
  //it has to be 1;
  //require only digist
  // require lenth of 10 digits or 11 max
  // () may/or may not be around area code
  // -/space may/may not be btw digist
  //-if it has, it should btw the first 6 digits
  //+ mab/may not be before the country code.

  let regEx =
    /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9] |[2-9][02-8][0-9]) [\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
  let strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    let inde = str.indexOf(str[i]);
    //console.log(inde)
    if (!regEx.test(str)) {
      return false;
    } else {
      return false;
    }
  }
}

validate("555-555-5555"); //t
validate("123**&!!asdf#"); //f
validate("(6054756961)"); //t
validate("2 (757) 622-7382"); //f
validate("1 456 789 4444"); //t
validate("1 555)555-5555"); //true
validate("1(555)555-5555"); //true
