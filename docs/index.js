if( location.hash === '' || location.hash === '#' ){
  location.hash = '/' + initState.selectedPage;
}

import _ from 'lodash';

import Router from './router';
import View from './View';
import Store from './store/store';
import Actions from './store/actions';

import initState from './store/initState';
var store = Store(initState);
var actions = Actions(store);

Router(actions);

window.onload = function(){
  console.log('page loaded');

  var view = View('#content');

  store.subscribe(function(){
    var state = store.getState();
    console.log('State change: ', state);
    view.load(state.pageSpec);
  });

  store.dispatch({type:'init'});
};
