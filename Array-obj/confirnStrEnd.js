//I) split a string into sub str
//2) check if the length is one then:
//a) conpare the last char to the traget if the targe is a char;
//b)if the target length is greater than 1:
//- use .slice()method and pass negation of target.length as
//it param so that count start from the end of the str;
//compare again slice result to the target;
//3) if the length of splitted str > 1 then:
//a) loop thru the sub str and return the camparison of
// last word to the target;
function Ending(str, target) {
  let splitted = str.split(" ");

  if (splitted.length === 1) {
    for (let i = 0; i < str.length; i++) {
      if (str[str.length - 1] === target) {
        return true;
      } else if (str.slice(-target.length) === target) {
        return true;
      }
      return false;
    }
  }
  if (splitted.length > 1) {
    for (let i = 0; i < splitted.length; i++) {
      return splitted[splitted.length - 1].includes(target);
    }
  }
}
