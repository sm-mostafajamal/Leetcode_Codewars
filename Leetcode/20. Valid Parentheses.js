/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let brackets = {
		'(': ')',
		'{': '}',
		'[': ']'
	}
	let closingBrac = []

	for (let j = 0; j < s.length ; j++) {
		if(brackets.hasOwnProperty(s[j])){
			closingBrac.push(brackets[s[j]])
		}else if(s[j] !== closingBrac.pop()){
			return false
		}
	}

	return closingBrac.length === 0

};

// isValid("()[]{}")
// isValid('{[]}')
// isValid("(){}}{")
isValid("({{{{}}}))")
// isValid("(]")




