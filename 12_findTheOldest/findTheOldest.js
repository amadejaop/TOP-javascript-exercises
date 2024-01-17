const findTheOldest = function(arr) {
    let currentYear = (new Date()).getFullYear();
    let oldestAge = 0;
    let index = 0;
    let numPeople = arr.length;

    for (let i = 0; i < numPeople; i++) {
        if (arr[i].hasOwnProperty('yearOfDeath')) {
            let result = arr[i].yearOfDeath - arr[i].yearOfBirth;
            if (result > oldestAge) {
                oldestAge = result;
                index = i;
            }
        } else {
            let result = currentYear - arr[i].yearOfBirth;
            if (result > oldestAge) {
                oldestAge = result;
                index = i;
            }
        }
    }
    console.log(arr[index].name);
    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
