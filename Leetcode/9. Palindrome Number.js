/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
//     if x less than 0 then return false
    if(x < 0) return false;
//     at first store the given number to a variable and also create another variable reverseNum = 0
    let tmp = x
    let reverseNum = 0
    while(tmp != 0){
//      separate the last number by doing modulo by 10 and store in an another variable
        let lastNum = tmp % 10
//      multiply with reverseNum with 10 and add the lastNum
        reverseNum = reverseNum * 10 + lastNum
//      remove the last number from tmp variable by deviding tmp with 10 and use Math.floor to remove the decimal value
        tmp = Math.floor(tmp/10)
    }
//      campare x with reverseNum
    return x === reverseNum ? true : false
};

isPalindrome(123)
