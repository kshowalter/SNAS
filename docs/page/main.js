import illustration_main from './illustration/main';

module.exports = function(){

  var specs = {
    tag: 'div',
    props: {
      class: 'notice'
    },
    children: [
      {
        tag: 'span',
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
      illustration_main()
    ]
  };

  return specs;
};
