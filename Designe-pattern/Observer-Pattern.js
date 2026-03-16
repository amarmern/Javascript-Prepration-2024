/*
The Observer Pattern allows one or multiple observers to listen for changes in a subject. 
This pattern is especially useful in scenarios like event handling and managing state changes.
*/

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log(`Observer received: ${data}`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notifyObservers('Hello, Observers!'); // Outputs: Observer received: Hello, Observers! (twice)
