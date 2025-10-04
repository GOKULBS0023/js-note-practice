//bind currying...
let multiply = function (x, y) {
  console.log(`x=${x}`, `y=${y}`);

  console.log(x * y);
};

let multiplyTwo = multiply.bind(2, 9);

multiplyTwo(3);

// closure currying

let multiplier = function (x) {
  return function (y) {
    console.log(x * y, "closure currying");
  };
};

multiplier(2)(3);
