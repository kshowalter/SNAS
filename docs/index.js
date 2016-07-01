import _ from 'lodash';

var redux = require('redux');

import SpecDOM  from 'specdom';

import reducer from './reducer';
import Router from './router';
import Actions from './actions';

import page_content from './content';
import page_about from './page/about';
import page_structure from './page/structure';

var createStore = redux.createStore;

var initState = {
  selectedPage: 'main',
  pages: {
    about: page_about(),
    structure: page_structure()
  }
};

var store = createStore(reducer, initState);
var actions = Actions(store);

if( location.hash === '' || location.hash === '#' ){
  location.hash = '/' + initState.selectedPage;
}
Router(actions);

window.onload = function(){
  console.log('page loaded');

  var specdom = SpecDOM('#content');

  store.subscribe(function(){
    var state = store.getState();

    //window.state = state; // DEVMODE
    console.log('State change: ', state);

    //sessionStorage.setItem('selectedSubject', state.selectedSubject);

    var subject = state.pages[state.selectedPage];
    var page = page_content(subject);
    specdom.load(page);
  });


  store.dispatch({
    type: 'init'
  });


};
