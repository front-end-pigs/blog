function TestFn() {
  this.getValue = function() {
    console.log(1);
  };
}

TestFn.prototype.getValue = function() {
  console.log(2);
};

const fn = new TestFn();
fn.getValue();
