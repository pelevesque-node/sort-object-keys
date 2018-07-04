[![Build Status](https://travis-ci.org/pelevesque/sort-object-keys.svg?branch=master)](https://travis-ci.org/pelevesque/sort-object-keys)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/sort-object-keys/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/sort-object-keys?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# sort-object-keys

Sorts an object by keys.

## Node Repository

[https://www.npmjs.com/package/@pelevesque/sort-object-keys](https://www.npmjs.com/package/@pelevesque/sort-object-keys)

## Installation

`npm install @pelevesque/sort-object-keys`

## Tests

### Standard Style & Unit Tests

`npm test`

### Standard Style & Unit Tests & Coverage

`npm run cover`

## Usage

```js
const sortObjectKeys = require('@pelevesque/sort-object-keys')
const unsorted = { "3": 3, "1": 1, "2": 2, "0": 0 }
const result = sortObjectKeys(unsorted)
// result === { "0": 0, "1": 1, "2": 2, "3": 3 }
```
