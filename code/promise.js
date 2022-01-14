function MyPromise(executor) {
  this.value = undefined;
  this.reason = undefined;
  this.status = 'pending'; // 状态 pending、resolved、rejected，默认为 pending
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];

  const resolve = (value) => {
    if (this.status === 'pending') {
      this.value = value;
      this.status = 'resolved';
      this.resolvedCallbacks.forEach(fn => fn());
    }
  };

  const reject = (reason) => {
    if (this.status === 'pending') {
      this.reason = reason;
      this.status = 'rejected';
      this.rejectedCallbacks.forEach(fn => fn());
    }
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

MyPromise.prototype.then = function(fn) {
  const _this = this;
  if (this.status === 'resolved') {
    fn(this.value);
  }
  if (this.status === 'pending') {
    this.resolvedCallbacks.push(function() {
      fn(_this.value);
    });
  }
};

MyPromise.prototype.catch = function(fn) {
  const _this = this;
  if (this.status === 'rejected') {
    fn(this.reason);
  }
  if (this.status === 'pending') {
    this.rejectedCallbacks.push(function() {
      fn(_this.reason);
    });
  }
};

// ---------------- 调用 ----------------
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('----> RESOLVED <----');
  }, 1000);
})

promise.then((done) => {
  console.log('resolved ====>', done);
});
