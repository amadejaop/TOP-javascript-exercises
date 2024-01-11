const add = function(num1, num2) {
  return num1 + num2;	
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(arr) {
  let arrLength = arr.length;
  let sum = 0;
  if (arrLength === 0) {
    return 0;
  } else {
    for (let i = 0; i < arrLength; i++) {
      sum += arr[i];
  }
    return sum;
  }
};

const multiply = function(arr) {
  let arrLength = arr.length;
  let result = 0;

  if (arrLength === 0) {
    return 0;
  } else if (arrLength === 1) {
    return arr[0];
  } else {
    result = arr[0] * arr[1];
    if (arrLength > 2) {
      for (let i = 2; i < arrLength; i++) {
        result *= arr[i];
      }
    }
    return result;
  }
};

const power = function(base, exponent) {
  let result = 0;
  if (base === 0 && exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return base;
  } else {
    result = base * base;
    if (exponent > 2) {
      for (let i = 2; i < exponent; i++) {
        result *= base;
      }
    }
  }
  return result;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
