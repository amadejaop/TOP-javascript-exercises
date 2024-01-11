const palindromes = function (string) {
 let cleanedString = string.replace(/[^a-z0-9]/gi, '');
 const strLen = cleanedString.length;
 cleanedString = cleanedString.toLowerCase();
 const half = Math.floor(strLen / 2);
 let isPalindrome = true;

 for (let i = 0; i < half; i++) {
   isPalindrome = (cleanedString[i] === cleanedString[strLen - 1 - i]);
   if (!isPalindrome) {
    return false;
   }
 }
return true;
};

// Do not edit below this line
module.exports = palindromes;
