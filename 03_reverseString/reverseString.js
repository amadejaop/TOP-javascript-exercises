const reverseString = function(string) {
  let charArray = string.split("");
  let charArrayLength = charArray.length;
  let reversedString = '';

  for (let i = charArrayLength - 1; i >= 0; i--) {
    reversedString += charArray[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
