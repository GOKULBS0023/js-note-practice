//type 1
let obj1 = {
  firstName: "Gokul",
  lastName: "Bharathi",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName + " " + "type 1");
  },
};
obj1.printFullName();
let obj2 = {
  firstName: "Nandhu",
  lastName: "Kishore",
};
obj1.printFullName.call(obj2);

//type 2

let obj3 = {
  firstName: "Gokul",
  lastName: "Bharathi",
};
let obj4 = {
  firstName: "Nandhu",
  lastName: "Kishore",
};

function printFullName() {
  console.log(this.firstName + " " + this.lastName + " " + "type 2");
}

printFullName.call(obj1);
printFullName.call(obj2);
