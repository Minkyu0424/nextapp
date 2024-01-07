function Counter(){
  var counter = 0;
  return {
    increase: function () {
      return ++counter;
    },
    decrease: function () {
      return --counter;
    },
    counter: function () {
      console.log("counter에 접근!");
      return counter;
    },
  };
}
var c = Counter();
console.log(c.increase()); // 1
console.log(c.increase()); // 2
console.log(c.increase()); // 3
console.log(c.decrease()); // 2
console.log(c.counter()); // 2
