
module.exports = function(state, action){
  if( action.type === 'init'){

    return state;
  }


  if( action.type === 'selectPage'){
    state.selectedPage = action.pageName;
  }

  return state;
};
