import {div, span, a, ul, li, br, h1, h2, h3} from 'specdom_helper';

import _ from 'lodash';

import pages from './pages';
var pageArray = Object.keys(pages);

export default function(subjectSpec){

  var ulArray = [];
  pageArray.forEach(function(name){
    ulArray.push(
      li([
        a(_.capitalize(name), '#/'+name)
      ])
    );
  });

  var config = div({class:'page'}, [
    div({class:'content'}, [
      h2('WAS'),
      br(),
      ul(ulArray)
    ]),
    div({class:'subject'}, [
      subjectSpec
    ])
  ]);

  console.log(config);
  return config;
}
