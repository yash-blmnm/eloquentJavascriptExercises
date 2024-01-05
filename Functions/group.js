class Group {
  // Your code here.
  constructor() {
    this.group = {};
  }
  add(val) {
    if (!this.group[val]) {
      this.group[val] = val;
    }
  }
  has(val) {
    return this.group[val] ? true : false;
  }
  delete(val) {
    if (this.group[val]) {
      delete this.group[val];
    }
  }
  static from(arr) {
    let newGroup = new Group();
    for (let val of arr) {
      if (!newGroup.group[val]) {
        newGroup.group[val] = val;
      }
    }
    return newGroup;
  }
}

let group = Group.from([10, 20, 30]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

/* Group functionality written using array as collection data structure */

class NGroup {
  // Your code here.
  constructor() {
    this.group = [];
  }
  add(val) {
    if (this.group.indexOf(val) < 0) {
      this.group.push(val);
    }
  }
  has(val) {
    return this.group.indexOf(val) < 0 ? false : true;
  }
  delete(val) {
    let index = this.group.indexOf(val);
    if (index >= 0) {
      this.group = [
        ...this.group.slice(0, index),
        ...this.group.slice(index + 1),
      ];
    }
  }
  static from(arr) {
    let newGroup = new Group();
    for (let val of arr) {
      if (newGroup.group.indexOf(val) < 0) {
        newGroup.group.push(val);
      }
    }
    return newGroup;
  }
}

let grp = NGroup.from([10, 20]);
console.log(grp.has(10));
// → true
console.log(grp.has(30));
// → false
grp.add(10);
grp.delete(10);
console.log(grp.has(10));
// → false
