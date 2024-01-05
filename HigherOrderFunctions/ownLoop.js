// Your code here.
function loop(count, test, update, body) {
  let cur = count;
  while (test(cur)) {
    body(cur);
    cur = update(cur);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1
