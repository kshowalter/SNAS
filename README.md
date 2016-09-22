# Web Application Structure

Defines standardized connection points within a application that will encourage interchangeable modules.

## Description

All primary variable data is stored in the state. The state is held in a [state manager](https://gist.github.com/kshowalter/94f80a8c54bf1133e82d7a28b0de4778).
Some variables that are dependent on the primary data may be stored outside of the state.
These variables should mostly be related to UI rendering.

Changes to the state should be defined in a standardized object like an [action](http://redux.js.org/docs/basics/Actions.html) in Redux.
A [state manager](https://gist.github.com/kshowalter/94f80a8c54bf1133e82d7a28b0de4778) function is called to apply the action to the state.
This state manager is sometimes called a reducer (in [Redux](http://redux.js.org/docs/basics/Reducers.html)) because it takes a state and action, and returns a new state. (see also [Array.reduce](http://devdocs.io/javascript/global_objects/array/reduce))
An updating function is called after every state change. This is where the UI should be updated.

Actions can submitted to the action handler as plain object with a [dispatcher](http://devdocs.io/redux/api/store#dispatch) attached to the state container ([store](http://devdocs.io/redux/basics/store)), or with a generic action dispatcher that triggers the state change based on the action ([example](https://gist.github.com/kshowalter/bc6f66715a7426b7599d5c8d48d72cdc)).

Simple application data can be stored in the state. Larger sets of data should be stored in a more permanent format. Traditionally the only option was a database, and they had a search index built in. Databases are still a common among the options, but some do not not index the data in a way that allows easy searching.

It is a good idea to store an index of the data in the application(?).

Search engines:
  * [Fuse](https://github.com/krisk/Fuse): "Lightweight fuzzy-search, in JavaScript http://fusejs.io/"
    * "Lightweight fuzzy-search, in JavaScript, with zero dependencies"
  * [Lunr.js](https://github.com/olivernn/lunr.js): "A bit like Solr, but much smaller and not as bright http://lunrjs.com"

Databases:
  * [TingoDB](https://github.com/sergeyksv/tingodb): "Embedded Node.js database upward compatible with MongoDB"
    * "TingoDB is an embedded JavaScript in-process filesystem or in-memory database upwards compatible with MongoDB at the API level."
    * A JSON based database with MongoDB like API
    * This can be good for applications with smaller datasets, or used in early development before a MongoDB is implemented.
  * [Lowdb](https://github.com/typicode/lowdb): "A small local database for small projects :cat: (powered by lodash API)"
    * Can save to JSON, or other formats.
    * Works well with lodash.
  * [Redis](https://github.com/antirez/redis): "Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, HyperLogLogs, Bitmaps. http://redis.io"


Connecting the client to the server.
  * [socket.io](https://github.com/socketio/socket.io/): "Realtime application framework (Node.JS server) http://socket.io"

Server:
  * [Express](https://github.com/expressjs/express/): "Fast, unopinionated, minimalist web framework for node. http://expressjs.com"



## Needed

* View
* Data manager
* Server communication
  * User management
  * Data transmission (to-from database)
* Server
  * Serve files or templates
  * User management
  * Database management
* Database


* \[view\]
* <[specDOM API](https://github.com/kshowalter/specDOM_API)>
* \[[state manager](https://gist.github.com/kshowalter/94f80a8c54bf1133e82d7a28b0de4778)\]
* \[Server communication\]: User management, Data transmission to and from database

* \[Server\]: Serve files or templates, User management, Database management)
\[Database\]





## Connection points
  * View config element (to be written, currently in [ConfigDOM](https://github.com/kshowalter/configdom))
  * [Geometery](https://github.com/kshowalter/GeometryAPI)

## Helpers
These are modules that help create the standard config objects.

* Data
  * [kstore](https://github.com/kshowalter/kstore): A simple indexed table storage object.
* View creator
  * [specDOM_helper](https://github.com/kshowalter/specDOM_helper)

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
