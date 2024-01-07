const removeFromArray = function(arr, ...args) {
 for (const arg of args) {
    if (arr.includes(arg)) {
      // find the index of the arg in the arr
      // remove the arg from the arr
      let index = arr.indexOf(arg);
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
