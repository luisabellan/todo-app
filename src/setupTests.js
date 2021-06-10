// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// this used to work, not anymore due to changes in jsdom


/* const localStorageMock = (function () {
  let store = {};
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

 */

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;


/* const toggleItem = jest.fn()
global.toggleItem = toggleItem; */




// Alternative to localStorageMock about is using this package: https://www.npmjs.com/package/jest-localstorage-mock


