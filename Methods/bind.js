// bind method will copy the function and will be called later. instead of calling the function that time, it will copy the function and will be called later..
let bindObj = {
  firstName: "Nandhu",
  lastName: "Kishore",
};

function printFullName(home, state, type) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      home +
      ", " +
      state +
      " for " +
      type +
      "."
  );
}

const print = printFullName.bind(bindObj, "Erode", "Tamilnadu", "bind");
print();
