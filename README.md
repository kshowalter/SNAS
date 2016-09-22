# Web Application Structure

Defines standardized connection points within a application that will encourage interchangeable modules.


## Structure
Connecting [functions] with {APIs}

* \[view\]
* {[specDOM API](https://github.com/kshowalter/specDOM_API)}
* \[[state manager](https://gist.github.com/kshowalter/94f80a8c54bf1133e82d7a28b0de4778)\]
* {[Client-Server communication](docs/client-server.md)}: User management, Data transmission to and from database
* \[[Server](docs/server.md)\]: Serve files or templates, User management, Database management
* {general database API?}
* \[[Data storage](docs/data_storage.md)\]


## Helpers
These are modules that help create the standard config objects.

* Data
  * [kstore](https://github.com/kshowalter/kstore): A simple indexed table storage object.
* View creator
  * [specDOM_helper](https://github.com/kshowalter/specDOM_helper)
* Illustrations
  * [Geometery](https://github.com/kshowalter/GeometryAPI)
* View renderer
  * [ConfigDOM](https://github.com/kshowalter/configdom): elementConfig --> DOM
  * [SimpleDOM](https://github.com/kshowalter/SimpleDOM): A basic DOM manipulation (similar to Jquery)
    * Used by the view renderer to modify the DOM.
  * [mkDrawing](https://github.com/kshowalter/mkDrawing): GeomoteryConfig --> [SVG,image,PDF?]
* View triggered actions
  * [hash_router](https://github.com/kshowalter/hash_router)
    * Trigger changes based on URL
  * event_router
    * Based on [dispatchEvent](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)
    * [MDN: Creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
      * var event = new Event('test');
      * document.dispatchEvent(event);
      * document.addEventListener('test', function(e){console.log(e);}, false);
  * Dispatcher
    * A dispatcher function can be passed to the view renderer
      * [action_dispatcher](https://gist.github.com/kshowalter/bc6f66715a7426b7599d5c8d48d72cdc)
      * or Redux's [dispatch](http://devdocs.io/redux/api/store#dispatch)
