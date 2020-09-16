Object.defineProperty(exports, '__esModule', {value: true});

require('./mqtt');

// Set up an in-memory alternative to global localStorage

const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },

  getItem: (key) => myStorage[key],

  removeItem: (key) => {
    const index = myStorage.indexOf(key);
    if (index > -1) {
      myStorage.splice(index, 1);
    }
    //deletemyStorage[key];
  },
};

function init() {
  global.localStorage = myStorage;
}

exports.default = init;
