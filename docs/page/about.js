import {div, span, a, ul, li, br, h1, h2, h3} from 'specdom_helper';

module.exports = function(){
  var specs = div([
    h1('Web Application Structure'),
    span('A guide to creating a modern web application'),
    h2('Docs'),
    ul([
      li([
        a('structure','#/structure')
      ])
    ])
  ]);

  return specs;
};
