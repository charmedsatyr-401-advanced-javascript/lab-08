![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 08: Data Modeling

### Author: Joseph Wolfe

### Links and Resources
* [PR](https://github.com/charmedsatyr-401-advanced-javascript/lab-08/pull/1)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-08.svg?branch=submission)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-08)

#### Documentation
* [jsdoc](./docs/index.html)

### Modules
`./models/categories.js`, identical to `./api-server/src/models/categories.js`

`./models/products.js`, identical to `./api-server/src/models/products.js`

`./models/products.schema.js`, identical to `./api-server-src/models/products.schema.js`

#### `categories.js`
##### Exported Values and Methods from `categories.js`
`get()` -> `Array of objects` from database
`get(id)` -> `object` from database

`post(record)` -> new `record` from database

`put(id, record)` -> modified `record` from database

`delete(id)` -> deleted `record` from database

`validate(entry)` -> Boolean
This function returns a Boolean value determined by whether the entry matches the embedded schema.

#### `products.js`
##### Exported Values and Methods from `products.js`
`get()` -> `Promise` -> `Array of objects` from database

`get(id)` -> `Promise` -> `object` from database

`post(record)` -> `Promise` -> new `record` from database

`put(id, record)` -> `Promise` -> modified `record` from database

`delete(id)` -> `Promise` -> deleted `record` from database

#### `products.schema.js`
##### Exported Values and Methods from `products.schema.js`
Exports a `mongoose` Schema, `products`

#### Running the app
* It is not clear how to run this app without errors.

`nodemon ./api-server/index.js` is a good starting point.

#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run test-watch`
  * `npm run lint`

* What assertions were made?
  * `categories.js`
    *  `post` method
    
       ✓ add a record to the database and return what was posted
    * `get` method

      ✓ should return a record if given a valid `_id`

      ✓ should return an array if given an invalid `_id`

      ✓ should return an array if not given an argument
    * `put` method

      ✓ should return a modified record if given a valid `_id` and `record`

      ✓ should return an empty object if given an invalid `_id`
    * `delete` method

      ✓ should remove the element with the given `_id` from the database

      ✓ should return an empty object if given an invalid `_id`


    * `validate` method

      ✓ should return `false` if an entry does not match the schema

      ✓ should return `true` if an entry does match the schema



  
  * `products.js`
    * `post` method

      ✓ add a record to the database and return what was posted (19ms)
    * `get` method

      ✓ should return a record if given a valid `id`

      ✓ should return an array if given an invalid `id`

      ✓ should return an array if not given an argument
    * `put` method

      ✓ should return a modified record if given a valid `id` and `record`




* What assertions need to be / should be made?
  * `categories.js`
    * `delete` method tests
      * should return an empty object if given an invalid `_id`
  * `products.js`
    * `put` method tests
      * should return an empty object if given an invalid `_id` (2ms)
    * `delete` method tests
  * Once the integration of these modules with the working server is complete, the functionality of the server routes and functionality should be fully tested.


#### UML
N/A
