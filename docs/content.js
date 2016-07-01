import {div, span, a, ul, li, br, h1, h2, h3} from 'specdom_helper';


export default function(subject){

  var config = div({class:'page'}, [
    div({class:'content'}, [
      h2('WAS'),
      br(),
      ul([
        li([
          a('About', '#/about')
        ]),
        li([
          a('Structure', '#/structure')
        ])
      ])
    ]),
    div({class:'subject'}, [
      subject
    ])
  ]);

  console.log(config);

  return config;
}
