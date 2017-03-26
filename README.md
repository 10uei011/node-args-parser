# node-args-parser

[![Build Status](https://travis-ci.org/10uei011/node-args-parser.svg?branch=master)](https://travis-ci.org/10uei011/node-args-parser)
[![Coverage Status](https://coveralls.io/repos/github/10uei011/node-args-parser/badge.svg?branch=master)](https://coveralls.io/github/10uei011/node-args-parser?branch=master)

Node.js command line arguments parser.

## Install the module

```bash
$ npm install node-args-parser
```

## Usage

Require the module and pass it the `process.argv` arguments array.

```js
const args = require("node-args-parser")(process.argv)

console.info(args)
```
An `object` is returned having a key for each argument given.

For example:

```bash
$ node ./script.js -x 1 -y 2
```

Will return:

```json
{
  "x": 1,
  "y": 1,
}
```

```bash
$ node ./script.js -f -r resource
```

Will return:

```json
{
  "f": true,
  "r": 'resource'
}
```

```javascript
if (args.f) {
  console.log("flag 'f' is set")
}
```

## Tests

Run `npm test`


