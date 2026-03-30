class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;

    this.thenCallbacks = [];
    this.catchCallbacks = [];
    this.finallyCallback = null;

    const resolve = (value) => {
      if (this.state !== 'pending') return;

      this.state = 'fulfilled';
      this.value = value;

      this.thenCallbacks.forEach((cb) => cb(value));
      if (this.finallyCallback) this.finallyCallback();
    };

    const reject = (reason) => {
      if (this.state !== 'pending') return;

      this.state = 'rejected';
      this.reason = reason;

      this.catchCallbacks.forEach((cb) => cb(reason));
      if (this.finallyCallback) this.finallyCallback();
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(cb) {
    if (this.state === 'fulfilled') {
      cb(this.value);
    } else {
      this.thenCallbacks.push(cb);
    }
    return this;
  }

  catch(cb) {
    if (this.state === 'rejected') {
      cb(this.reason);
    } else {
      this.catchCallbacks.push(cb);
    }
    return this;
  }

  finally(cb) {
    if (this.state !== 'pending') {
      cb();
    } else {
      this.finallyCallback = cb;
    }
    return this;
  }
}
