//second instance

const singleton = (function () {
  let instance;
  function createInstance() {
    const object = new Object('I am the object instance!!');
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

/**Singleton Design Pattern*
 * is a software design pattern that restricts the instantiation of a class
 * to a single.
 * This is useful when exactly one object is needed to coordinate actions
 *  across the system.
 * The Singleton pattern ensures that a class has only one instance and
 * provides a global point of access to it.
 * It is useful for managing shared resources like configuration settings,
 *  database connections, or logging services.*/
class SingleTon {
  constructor() {
    if (!SingleTon.instance) {
      SingleTon.instance = this;
    }
    return SingleTon.instance;
  }

  static getSingleTon() {
    if (!SingleTon.instance) {
      SingleTon.instance = new SingleTon();
    }
    return SingleTon.instance;
  }
  display() {
    console.log('SingleTOn Instance');
  }
}

const s = SingleTon.getSingleTon();
s.display();
