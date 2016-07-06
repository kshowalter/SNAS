import {div, span, a, ul, li, br, h1, h2, h3} from 'specdom_helper';

import example1 from './illustration/example1';

module.exports = function(){

  var specs = div({class:'notice'}, [
    div([
      span('Example with redux/flux like structure.'),
      div([
        example1()
      ]),
      div('Redux is JS library inspired by Flux, Elm and Om. Both Flux and Elm are inspired by event sourcing.')
    ])
  ]);

  return specs;
};
