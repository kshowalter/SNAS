export default function(store){
  var actions = {
    _store: store,
    _dispatch: function(actionConfig){
      this._store.dispatch(actionConfig);
    },
    
    selectPage: function(pageName){
      this._dispatch({
        type: 'selectPage',
        pageName: pageName
      });
    }
  };

  return actions;

}
