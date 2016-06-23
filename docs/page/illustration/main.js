import svgize from 'svgize';
import chart_maker from 'chart_maker';
import svgAttr  from './svg_attr';


module.exports = function(){
  var col = _.range(-100,1000,200);
  var row = _.range(0,2000,100);

  var points = {};
  points.initial_state = { label: 'Initial State', x:col[3], y:row[1], type: 'api' };
  points.state = { label: 'State', x:col[2], y:row[2], type: 'api' };
  points.updater = { label: 'Updater', x:col[2], y:row[3], type: 'module', url:'http://redux.js.org/docs/basics/Actions.html' };
  points.view_maker = { label: 'View Maker', x:col[2], y:row[8], type: 'module', url:'https://github.com/kshowalter/specdom' };
  points.specdom_api_page = { label: 'specDOM API', x:col[2], y:row[9], type: 'api', url:'https://github.com/kshowalter/specdom_API' };
  points.vdom = { label: 'Virtual DOM', x:col[2], y:row[10], type: 'module', url:'https://gist.github.com/kshowalter/cb99f8cc4de27b7bfa4360dd47a9b054' };
  points.dom = { label: 'DOM', x:col[2], y:row[11], type: 'api', url:'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' };
  points.user_action = { label: 'User Action', x:col[2], y:row[12], type: 'module'};
  points.action = { label: 'Action', x:col[2], y:row[15], type: 'api', url:'http://redux.js.org/docs/basics/Actions.html' };

  points.network_request = { label: 'Network Request', x:col[3], y:row[13], type: 'module'};
  points.network_event = { label: 'Network Event', x:col[3], y:row[14], type: 'module'};

  points.action_handler = { label: 'Action Handler', x:col[2], y:row[1], type: 'module', url:'http://redux.js.org/docs/basics/Reducers.html' };

  points.illustration_maker = { label: 'Illustration Maker', x:col[3], y:row[4], type: 'module', url: 'https://gist.github.com/kshowalter/cfb1a9bd1e827816b19030d1f22c4851' };
  points.geo_api = { label: 'Geometery API', x:col[3], y:row[5], type: 'api', url:'https://github.com/kshowalter/GeometryAPI' };
  points.svgize = { label: 'svgize', x:col[3], y:row[6], type: 'module', url:'https://github.com/kshowalter/svgize' };
  points.specdom_api_geo = { label: 'specDOM API', x:col[3], y:row[7], type: 'api', url:'https://github.com/kshowalter/specdom_API' };

  points.markdown_file = { label: 'Markdown file', x:col[4], y:row[3], type: 'api' };
  points.markdown_converter = { label: 'Markdown converter', x:col[4], y:row[4], type: 'module' };
  points.specdom_api_markdown = { label: 'specDOM API', x:col[4], y:row[7], type: 'api', url:'https://github.com/kshowalter/specdom_API' };

  points.html_maker = { label: 'HTML maker', x:col[3], y:row[10], type: 'module', url:'https://github.com/kshowalter/specDOM_to_SGML'};
  points.html = { label: 'HTML', x:col[3], y:row[11], type: 'api', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'};

  for( var pointName in points ){
    var point = points[pointName];
    if( ! point.label ){
      point.label = pointName;
    }
    point.connect = {};
  }

  var plot = chart_maker({
    width: 1000,
    height: 2000,
    points: points
  });


  plot.connect('initial_state','state');
  plot.connect('state','updater');
  plot.connect('updater','view_maker');
  plot.connect('view_maker','specdom_api_page');
  plot.connect('specdom_api_page','vdom');
  plot.connect('vdom','dom');
  plot.connect('dom','user_action');
  plot.connect('user_action','action');
  plot.connect('action','action_handler');
  plot.connect('action_handler','state');

  plot.connect('user_action','network_request');
  plot.connect('network_event','action');

  plot.connect('updater','illustration_maker');
  plot.connect('illustration_maker','geo_api');
  plot.connect('geo_api','svgize');
  plot.connect('svgize','specdom_api_geo');
  plot.connect('specdom_api_geo','view_maker');

  plot.connect('updater','markdown_converter');
  plot.connect('markdown_file','markdown_converter');
  plot.connect('markdown_converter','specdom_api_markdown');
  plot.connect('specdom_api_markdown','view_maker');

  plot.connect('specdom_api_page','html_maker');
  plot.connect('html_maker','html');

  /*
  plot.connect('output', 'Geometery API');
  plot.connect('Geometery API', 'specdom API');
  */

  console.log('plot', plot);
  var plotGeoSpec = plot.svgSpec;

  var svgSpec = svgize(plotGeoSpec, svgAttr);

  return svgSpec;
};
