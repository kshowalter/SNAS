import {div, span, a, ul, li, br, h1, h2, h3} from 'specdom_helper';

import illustration_structure from './illustration/structure';

module.exports = function(){

  var specs = {
    tag: 'div',
    props: {
      class: 'notice'
    },
    children: [
      {
        tag: 'div',
        props: {},
        children: [
          'List of ',
          {
            tag: 'a',
            props: {
              href: 'https://github.com/kshowalter?tab=repositories'
            },
            text: 'repositories'
          }
        ]
      },
      {
        tag: 'div',
        props: {},
        children: [
          illustration_structure()
        ]
      }
    ]
  };

  return specs;
};
