export default function(actions){

  function router(actions) {
    var request = location.hash.slice(2) || '';

    //var values = request.split('/');
    //actions.selectPage(values[0]);

    actions.selectPage(request);

  }


  // Listen on hash change:
  window.addEventListener('hashchange', function(){
    router(actions);
  });
  // Listen on page load:
  window.addEventListener('load', function(){
    router(actions);
  });

  return true;
}
