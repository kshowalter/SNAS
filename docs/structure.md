# Application Structure

## General structure

* local script (application)

      "dependencies": {
        "configdom": "git+https://github.com/kshowalter/configdom.git"
      }

      import * as configdom from '';


* config helpers (functions)
  * [functions that generate ConfigDOM objects]()
* config
  * [ConfigDOM API](https://github.com/kshowalter/configdom)
* vDOM
  * [ConfigDOM](https://github.com/kshowalter/configdom)
* DOM

## Flow
* Initial State
* State
* View renderer
* Virtual DOM
* DOM
* User triggered Action
* Action handler (Reducer)
* New State
