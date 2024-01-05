// Your code here.
function countChar(str, char) {
  return str.split("").filter((x) => x === char).length;
}
countBs = (str) => countChar(str, "B");
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
