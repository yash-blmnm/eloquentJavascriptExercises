// Your code here.

function arrayToList(arr) {
  let res = {
    value: arr[0],
    rest: null,
  };
  let pointer = res;
  for (let i = 1; i < arr.length; i++) {
    pointer.rest = { value: arr[i], rest: null };
    pointer = pointer.rest;
  }
  return res;
}

function listToArray(list) {
  let pointer = list;
  let res = [];
  while (pointer) {
    res.push(pointer.value);
    pointer = pointer.rest;
  }
  return res;
}

function prepend(val, list = {}) {
  return { value: val, rest: list };
}

function nth(list, index) {
  let pointer = list;
  let count = 0;
  while (pointer) {
    if (count === index) {
      return pointer.value;
    }
    pointer = pointer.rest;
    count += 1;
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20
