// Your code here.

const reverseArray = (arr) => {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
};

const reverseArrayInPlace = (arr) => {
  let temp = [...arr];
  let lastElemIndex = arr.length - 1;
  for (let i = lastElemIndex; i >= 0; i--) {
    arr[lastElemIndex - i] = temp[i];
  }
  //return arr;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
