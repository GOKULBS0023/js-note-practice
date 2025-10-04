//only difference between call and apply method is passing the arguments...
// instead of passing the arguments separately we will pass as array...

let obj = {
  firstName: "Nandhu",
  lastName: "Kishore",
};

function printFullName(home, state) {
  console.log(this.firstName + " " + this.lastName + " " + home + ", " + state);
}

printFullName.apply(obj, ["Erode", "Tamilnadu"]);
