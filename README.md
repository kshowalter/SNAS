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
