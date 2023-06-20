const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };
  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };
  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.setFirstName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.getFullName = function () {
    return fullName;
  };
  this.setFullName = function (name) {
    fullName = name;
  };
  return fullName;
};
const bob = new Person("Bob Ross");
bob.getFullName();
