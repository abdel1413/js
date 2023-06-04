const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      console.log(contacts[i]);
      if (contacts[i].hasOwnProperty(prop)) {
        console.log(contacts[i][prop]);
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }

  // return No such contact should be outside the
  //the forloop otherwise if no mutch is found at
  //the beginning, it will directly return
  // no such contact and exit from the function
  // So This way it won't be able to check the next
  //item.
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Kristian", "lastName");
lookUpProfile("Harry", "likes");

lookUpProfile("Bob", "number");
lookUpProfile("Akira", "address");
