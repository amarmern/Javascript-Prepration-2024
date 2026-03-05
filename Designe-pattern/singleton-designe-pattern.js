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
