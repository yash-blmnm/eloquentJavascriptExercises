function every(array, test) {
  // Your code here.
  /*for(let val of array) {
      if(!test(val)) {
          return false
      }
    }
    return true;*/
  return !array.some((val) => !test(val));
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
