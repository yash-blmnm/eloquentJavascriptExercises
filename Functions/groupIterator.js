// Your code here (and the code from the previous exercise)

class Group {
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
  get(index) {
    return this.group[index] ?? -1;
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
  get length() {
    return this.group.length;
  }
}

class GtoupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }
  next() {
    if (this.index == this.group.length) return { done: true };

    let value = { index: this.index, value: this.group.get(this.index) };
    this.index++;
    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GtoupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
