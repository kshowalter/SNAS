import content from '../content';
import pages from '../page/pages';

var pageNames = Object.keys(pages);

module.exports = function(state, action){
  if( action.type === 'init'){

    return state;
  }

  if( action.type === 'selectPage'){
    if( action.pageName !== '' ){
      var pageNameArray = action.pageName.split('/');
      if( pageNames.indexOf(pageNameArray[0])+1 ){
        state.selectedPage = action.pageName;
      } else {
        state.selectedPage = 'unknown';
      }
    } else {
      state.selectedPage = state.defaultPage;
    }
    state.pageSpec = content.mk(state);
  }

  return state;
};
