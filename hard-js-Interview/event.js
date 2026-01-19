class MyEventListner {
  constructor() {
    this._event_Listner = {};
  }

  on(event, listner) {
    //Register the listner
    if (!this._event_Listner[event]) {
      this._event_Listner[event] = [];
    }

    this._event_Listner[event].push(listner);
    return true;
  }
  emit(event, ...args) {
    if (!this._event_Listner[event]) {
      return false;
    }
    const listners = this._event_Listner[event];
    listners.forEach((listner) => listner(...args));
  }
  off(event, listner) {
    if (!this._event_Listner[event]) {
      return false;
    }

    const index = this._event_Listner[event].indexOf(listner);
    if (index < 0) {
      return false;
    }
    this._event_Listner[event].splice(index, 1);
    return true;
  }
  once(event, listner) {
    const wrapperFn = (...args) => {
      listner(...args);
      this.off(event, wrapperFn);
    };

    this.on(event, wrapperFn);
    return true;
  }
}

const e = new MyEventListner();

const sendWhatsApp = (userName) => console.log('User whatsApp', userName);
e.on('user:signup', (userName) => console.log('User SignUP', userName));
// e.on('user:signup', (userName) => console.log('User email', userName));
e.once('user:signup', (userName) => console.log('User email', userName));
//e.on('user:signup', sendWhatsApp);
e.once('user:signup', sendWhatsApp);
e.on('user:logout', (userName) => console.log('User Logout', userName));

e.emit('user:signup', '@amrendra');
e.emit('user:signup', '@amrendra-1');

e.off('user:signup', sendWhatsApp);
e.emit('user:signup', '@amrendra-2');
e.emit('user:logout', '@amrendra');
