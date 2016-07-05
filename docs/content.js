import {div, span, a, ul, li, br, h1, h2, h3} from 'specdom_helper';

import toc from './page/toc';

export default {
  mk: function(state){
    var subject = state.pages[state.selectedPage];

    var page = toc(subject());

    return page;
  }
};
