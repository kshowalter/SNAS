import {div, span, a, ul, li, br, h1, h2, h3} from 'specdom_helper';

import illustration_structure from './illustration/structure';

module.exports = function(){

  var specs = {
    tag: 'div',
    props: {
      class: 'notice'
    },
    children: [
      div([
        'List of ',
        a('repositories', 'https://github.com/kshowalter?tab=repositories')

      ]),
      div([
        illustration_structure()
      ])
    ]
  };

  return specs;
};
