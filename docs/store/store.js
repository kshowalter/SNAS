import reducer from './reducer';

import initState from './initState';

var redux = require('redux');

module.exports = function(){
  var createStore = redux.createStore;
  var store = createStore(reducer, initState);
  return store;
};
