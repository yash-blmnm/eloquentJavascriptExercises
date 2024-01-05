// Your code here.

const range = (start, end, step = 1) => {
  if (step < 1 && start < end) {
    return [start];
  }
  let res = [];
  while (step < 1 ? start >= end : start <= end) {
    res.push(start);
    start += step;
  }
  return res;
};

const sum = (arr) => arr.reduce((a, x) => a + x, 0);

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(sum(range(5, 2, -2)));
