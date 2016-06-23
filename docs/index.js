console.log('script loaded');

import _ from 'lodash';
import SpecDOM  from 'specdom';
import page_main from './page/main';

window.onload = function(){
  console.log('page loaded');

  var specdom = SpecDOM('#content');

  specdom.load(page_main);

};
