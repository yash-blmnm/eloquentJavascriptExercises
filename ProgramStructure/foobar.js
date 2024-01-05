function printFooBar(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FooBar");
    } else if (i % 3 === 0) {
      console.log("Foo");
    } else if (i % 5 === 0) {
      console.log("Bar");
    }
  }
}
