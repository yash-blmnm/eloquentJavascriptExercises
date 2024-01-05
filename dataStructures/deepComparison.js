// Your code here.

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true;
  } else if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null ||
    Array.isArray(obj1) ||
    Array.isArray(obj2)
  ) {
    return obj1 === obj2;
  } else {
    let res = true;
    let obj1Keys = Object.keys(obj1);
    // Object.keys(obj1).forEach((key) => {
    for (let i = 0; i < obj1Keys.length; i++) {
      let key = obj1Keys[i];
      if (obj2.hasOwnProperty(key)) {
        res = res && deepEqual(obj1[key], obj2[key]);
      } else {
        return false;
      }
    }
    return res;
  }
};

let obj = { here: { is: "an" }, object: null };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: null }));
// → true
