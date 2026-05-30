/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
//     create a variable to add the converted number
    let num = 0;
// create an object store the given roman numbers
    const romanNumbers = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };
// loop through the given string and convert into numbers 
   const convNum = s.split('').map(el => romanNumbers[el])
	// console.log(convNum)
// loop through the converted Numbers if first number is less than second then subtract or else add
   for(let i = 0; i < convNum.length; i++){
		 if(convNum[i+1] === undefined){
			 num += convNum[i]
		 } else {
			 if(convNum[i] < convNum[i+1]){
				 // console.log(convNum[i+1], convNum[i] )
				num +=  convNum[i+1] - convNum[i]
				 i = i+1
				
		 }else {
				 // console.log(convNum[i])
			 num += convNum[i]
				 
		 }
		 }
		 
   }
    return num
	// console.log(num)
};

romanToInt("MCMXCIV")
// L = 50, V= 5, III = 3.
