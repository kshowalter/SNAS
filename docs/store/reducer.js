import content from '../content';

module.exports = function(state, action){
  if( action.type === 'init'){

    return state;
  }


  if( action.type === 'selectPage'){
    state.selectedPage = action.pageName;

    //var subject = state.pages[state.selectedPage];
    state.pageSpec = content.mk(state);



  }

  return state;
};
