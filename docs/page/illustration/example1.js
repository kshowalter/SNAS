import svgize from 'svgize';
import chart_maker from 'chart_maker';
import svgAttr  from './svg_attr';


module.exports = function(){

  var plot = chart_maker({
    width: 1000,
    height: 2000
  });


  var col = _.range(0,1000,150);
  var row = _.range(0,2000,125);

  plot.addPoint( { name:'initial_state',  x:col[2], y:row[1], type: 'api' } );
  plot.addPoint( { name:'state',  x:col[1], y:row[2], type: 'api' } );
  plot.addPoint( { name:'state_manager',  x:col[1], y:row[3], type: 'module', url:'https://gist.github.com/kshowalter/94f80a8c54bf1133e82d7a28b0de4778' } );
  plot.addPoint( { name:'view_maker',  x:col[1], y:row[8], type: 'module', url:'https://github.com/kshowalter/specdom' } );
  plot.addPoint( { name:'specdom_api_page', label: 'specDOM API', x:col[1], y:row[9], type: 'api', url:'https://github.com/kshowalter/specdom_API' } );
  plot.addPoint( { name:'vdom', label: 'Virtual DOM', x:col[1], y:row[10], type: 'module', url:'https://gist.github.com/kshowalter/cb99f8cc4de27b7bfa4360dd47a9b054' } );
  plot.addPoint( { name:'dom',  x:col[1], y:row[11], type: 'api', url:'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' } );
  plot.addPoint( { name:'user_action',  x:col[1], y:row[12], type: 'module'} );
  plot.addPoint( { name:'action',  x:col[1], y:row[15], type: 'api', url:'http://redux.js.org/docs/basics/Actions.html' } );

  plot.addPoint( { name:'specdom_helper', label: 'specDOM Helper', x:col[2], y:row[8], type: 'module', url:'https://github.com/kshowalter/specDOM_helper' } );

  plot.addPoint( { name:'network_request',  x:col[2], y:row[13], type: 'module'} );
  plot.addPoint( { name:'network_event',  x:col[2], y:row[14], type: 'module'} );

  plot.addPoint( { name:'action_handler',  x:col[1], y:row[1], type: 'module', url:'http://redux.js.org/docs/basics/Reducers.html' } );

  plot.addPoint( { name:'illustration_maker',  x:col[2], y:row[4], type: 'module', url: 'https://gist.github.com/kshowalter/cfb1a9bd1e827816b19030d1f22c4851' } );
  plot.addPoint( { name:'geo_api', label: 'Geometery API', x:col[2], y:row[5], type: 'api', url:'https://github.com/kshowalter/GeometryAPI' } );
  plot.addPoint( { name:'svgize', label: 'svgize', x:col[2], y:row[6], type: 'module', url:'https://github.com/kshowalter/svgize' } );
  plot.addPoint( { name:'specdom_api_geo', label: 'specDOM API', x:col[2], y:row[7], type: 'api', url:'https://github.com/kshowalter/specdom_API' } );

  plot.addPoint( { name:'markdown_file',  x:col[3], y:row[3], type: 'api' } );
  plot.addPoint( { name:'markdown_converter',  x:col[3], y:row[4], type: 'module' } );
  plot.addPoint( { name:'specdom_api_markdown', label: 'specDOM API', x:col[3], y:row[7], type: 'api', url:'https://github.com/kshowalter/specdom_API' } );

  plot.addPoint( { name:'html_maker', label: 'HTML maker', x:col[2], y:row[10], type: 'module', url:'https://github.com/kshowalter/specDOM_to_SGML'} );
  plot.addPoint( { name:'html', label: 'HTML', x:col[2], y:row[11], type: 'api', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'} );


  plot.cDown('initial_state','state');
  plot.cDown('state','state_manager');
  plot.cDown('state_manager','view_maker');
  plot.cDown('view_maker','specdom_api_page');
  plot.cDown('specdom_api_page','vdom');
  plot.cDown('vdom','dom');
  plot.cDown('dom','user_action');
  plot.cDown('user_action','action');
  plot.cDown('action','action_handler');
  plot.cDown('action_handler','state');

  plot.cDown('user_action','network_request');
  plot.cDown('network_event','action');

  plot.cDown('state_manager','illustration_maker');
  plot.cDown('illustration_maker','geo_api');
  plot.cDown('geo_api','svgize');
  plot.cDown('svgize','specdom_api_geo');
  plot.cDown('specdom_api_geo','view_maker');

  plot.cDown('state_manager','markdown_converter');
  plot.cDown('markdown_file','markdown_converter');
  plot.cDown('markdown_converter','specdom_api_markdown');
  plot.cDown('specdom_api_markdown','view_maker');

  plot.cDown('specdom_api_page','html_maker');
  plot.cDown('html_maker','html');

  /*
  plot.cDown('output', 'Geometery API');
  plot.cDown('Geometery API', 'specdom API');
  */

  var plotGeoSpec = plot.svgSpec;

  var svgSpec = svgize(plotGeoSpec, svgAttr);

  return svgSpec;
};
