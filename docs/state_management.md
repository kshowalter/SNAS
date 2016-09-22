# State Managers

All primary variable data is stored in the state. The state is held in a [state manager](https://gist.github.com/kshowalter/94f80a8c54bf1133e82d7a28b0de4778).
Some variables that are dependent on the primary data may be stored outside of the state.
These variables should mostly be related to UI rendering.

Changes to the state should be defined in a standardized object like an [action](http://redux.js.org/docs/basics/Actions.html) in Redux.
A [state manager](https://gist.github.com/kshowalter/94f80a8c54bf1133e82d7a28b0de4778) function is called to apply the action to the state.
This state manager is sometimes called a reducer (in [Redux](http://redux.js.org/docs/basics/Reducers.html)) because it takes a state and action, and returns a new state. (see also [Array.reduce](http://devdocs.io/javascript/global_objects/array/reduce))
An updating function is called after every state change. This is where the UI should be updated.

Actions can submitted to the action handler as plain object with a [dispatcher](http://devdocs.io/redux/api/store#dispatch) attached to the state container ([store](http://devdocs.io/redux/basics/store)), or with a generic action dispatcher that triggers the state change based on the action ([example](https://gist.github.com/kshowalter/bc6f66715a7426b7599d5c8d48d72cdc)).


## [Redux](http://redux.js.org/index.html)
Redux is a predictable state container for JavaScript apps. Redux is JS library inspired by Flux, Elm and Om. Both Flux and Elm are inspired by event sourcing.

Redux takes an [action](http://redux.js.org/docs/basics/Actions.html) and applies a [reducer function](http://redux.js.org/docs/basics/Reducers.html)

## Immutable structures

[Freezer](https://github.com/arqex/freezer) is not designed as a state manager, and is commonly used as a immutable structure in other managers. With it's update event, in can trigger a UI update when it's state is changed.
