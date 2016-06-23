
module.exports = function(state, action){
  if( action.type === 'init'){

    return state;
  }


  if( action.type === 'selectPage'){
    state.ui.selectedSubject = action.subjectID;
  }

  return state;
};
