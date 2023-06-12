const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

function reduce(arr) {
  return arr.reduce((sum, user) => sum + user.age, 0);
}

reduce(users);

//we can also use reduce to return an object
//where property names are name values and property
//value are  age values in users array

function ReduceObjec(arr) {
  return arr.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
  }, {});
}

ReduceObjec(users);

function red(arr) {
  return arr.reduce((obj, { name, age }) => {
    obj[name] = age;
    return obj;
  }, {});
}

//destructure and assignment
function r(arr) {
  return arr.reduce((ob, { name: n, user: u }) => {
    ob[n] = u;
    return ob;
  }, {});
}
