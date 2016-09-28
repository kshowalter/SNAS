# Client-Server communication




Options:
* Sockets: For real time, two-way communication.
  * Uses [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
  * Implementations
    * [socket.io](https://github.com/socketio/socket.io/): "Realtime application framework (Node.JS server) http://socket.io"
* REST: For occasional client triggered communication.
  * Uses [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
  *


## Other functions

## User management

### User creation

On client the user enters their username and password. The password is converted to a hash. The username and password hash are transmitted to the server as is?

The server creates a [token](./tokens.md) and sends this to the client.

The client saves this token in local storage to send with each request.

### Login

On client the user enters their username and password. The password is converted to a hash. The username and password hash are transmitted to the server as is?

On the server the username is used to pull retrieve the user document. The password hash submitted by the user is compared to the database hash.

Options:
* [Passport](https://github.com/jaredhanson/passport): "Simple, unobtrusive authentication for Node.js. http://passportjs.org/"
