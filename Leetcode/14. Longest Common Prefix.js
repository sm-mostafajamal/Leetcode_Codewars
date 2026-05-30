/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
//     add what common
	let common =''
// if strs length is 1 then return 
	if(strs.length == 1) return strs[0]
// loop until the first arr value length
	for(let i = 0; i <  strs[0].length; i++ ){
//      check the first array value letters are similar to other array letters
		for(let j=1; j < strs.length; j++){
			if(strs[0][i] == strs[j][i]){
//                 check if the array value letters r same till the last value 
				if( j+ 1 == strs.length){
//                  if it is same then common into a string
					common += strs[0][i]
				}
			}else {
//                 return what common 
                return common
            }
		}
	}
	// else return false
    return common
};


// longestCommonPrefix(["flower","flow","flight"])
longestCommonPrefix(["dog","racecar","car"])

