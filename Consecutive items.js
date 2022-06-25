// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

function consecutive(arr, a, b) {
//   if indexof a subtract index of b is 1 which is next or if -1 which situated prev then return true else false
  return arr.indexOf(a) - arr.indexOf(b) === 1 || 
    arr.indexOf(a) - arr.indexOf(b) === -1 
}
consecutive([1, 3, 5, 7], 3, 7)
// consecutive([1, 3, 5, 7], 3, 1)
