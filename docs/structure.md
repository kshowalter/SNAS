# Application Structure

## General structure

Application
|
\[APIs: CADLine, simpleConfigDOM_API]
|
(Converter functions: [mkDrawing](https://github.com/kshowalter/mkDrawing))
|
[[configDOM API](https://github.com/kshowalter/configDOM_API), [GeometryAPI](https://github.com/kshowalter/GeometryAPI)]
|
(Virtual DOM: [configDOM](https://github.com/kshowalter/configdom))
|
\<DOM>

## Flow
* Initial State
* State
* View renderer
* Virtual DOM
* DOM
* User triggered Action
* Action handler (Reducer)
* New State
