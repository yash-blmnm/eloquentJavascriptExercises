// Your code here.

function isEven(val) {
  if (val === 0) {
    return true;
  }
  if (val === 1) {
    return false;
  }
  return val > 0 ? isEven(val - 2) : isEven(val + 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
