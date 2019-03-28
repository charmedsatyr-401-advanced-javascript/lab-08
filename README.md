![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 08: Data Modeling

### Author: Joseph Wolfe

### Links and Resources
* [PR](https://github.com/charmedsatyr-401-advanced-javascript/lab-08/pull/1)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-08.svg?branch=submission)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-08)

#### Documentation
* [jsdoc](./docs/index.html)
* [swagger](./docs/swagger.json)

### Modules
#### `index.js`

##### Exported Values and Methods from `index.js`
`index.js` provides a command line interface for an instance of the `Bitmap` class instantiated with `./assets/bald.bmp`

#### Running the app
  * The app can be run out of the box on an instance of the `Bitmap` class created from `./assets/baldy.bmp`
    * `node index.js` (no string argument) -> invokes the `parse` method
    * The following commands can be used to invoke the `transform` method with functions exported from the indicated modules.

#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run watch`
  * `npm run lint`
* What assertions were made?
  * `bitmap.js`
    * `parse()`
      * Should return an object
      * Should return an object with a `pixelArray` key that has a number value

* What assertions need to be / should be made?
  * `index.js`
    * The command line interface for `index.js`'s hardcoded `bitmap` instance has not been tested.

#### UML
N/A
