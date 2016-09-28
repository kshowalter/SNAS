# Standardized Node Application Structure

Defines standardized connection points within a application that will encourage interchangeable modules.

## How to make an application

The most obvious part of an application is what the user sees. Often called the UI, or the View in web apps. The browser renders the interface, but you need to tell it what to render. The browser renders what is in the DOM ([Wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model), [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)). Manipulating the DOM is slow, so in an application with frequent changes a [virtual DOM](docs/virtual_DOM.md) is used.

What is shown in the view can be controlled in many ways. Traditionally (at least for web apps) this was done with MVC ([Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)). What is becoming a more popular method (in 2016) is a state based approach. The view is created based on the data that describes the current state of the application. State updates are triggered by one central function. This method was popularized by [Flux](https://facebook.github.io/flux/). See reference 1 for a comparison.

The application state is maintained in the client, but large and/or shared data is stored on the server. The client most have a way to communicate with the server. The two most popular patters are REST and socket, and they are detailed in the [client-server](docs/client-server.md) section.

The [server](docs/server.md) (software, not hardware) is responsible for providing the client code to the remote browser. This may be statically shared HTML and JS files, or customized pages rendered from templates on the server. The server will also often provide a connection between the client and the data storage.

[Data storage](docs/data_storage.md) is often provided by a database, but can also be flat-files or even volatile memory.

## Frameworks
Many [frameworks](docs/frameworks.md) have been created to make it easier to create applications. The problem is that most of them have there own API, and often span over many of the above parts. This makes it difficult to create your own combination of modules, or to switch between them.

Below is a high level structure for a web app. It separates the key parts of the the application structure by APIs. Modules that are compatible with this system could be easily exchanged with less effort than is currently possible. Module that are not compatible could be connected with an adapter function.

## Structure API
Connecting [functions] with {APIs}

* \[view\]
* {[specDOM API](https://github.com/kshowalter/specDOM_API)}
* \[[State management](docs/state_management.md)\]
* {[Client-Server communication](docs/client-server.md)}: User management, Data transmission to and from database
* \[[Server](docs/server.md)\]: Serve files or templates, User management, Database management
* {general database API?}
* \[[Data storage](docs/data_storage.md)\]

## References
1) [Flux vs. MVC (Design Patterns)](https://medium.com/hacking-and-gonzo/flux-vs-mvc-design-patterns-57b28c0f71b7#.mhgg7xxqw)
2)
