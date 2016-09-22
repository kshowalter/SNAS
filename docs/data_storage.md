# Data storage

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
