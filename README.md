iter-ops
---------

* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
    * [JavaScript](#javascript)
    * [TypeScript](#typescript)
* [API](#api)

## About

Basic operations on iterables.

## Installation

```
$ npm i iter-ops
```

## Usage

Follow the usage examples below, based on your development environment.

### JavaScript

Remapping an iterable object:

```js
const {pipe, map} = require('iter-ops');

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const i = pipe(a, map(value => ({value})));

const result = [...i];
//=> [{value: 1}, {value: 2}, ...]
```

### TypeScript

Calculating factorial of all even numbers:

```ts
import {pipe, filter, reduce} from 'iter-ops';

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const i = pipe(a,
        filter(f => f % 2),
        reduce((p, c) => p * c)
); //=> factorial of all even numbers (one-value iterable)

const result = i.first; //=> 384 
```

## API

Function `pipe` returns `IterableExt`, which extends [Iterable] with property `first`.

#### <i>Standard operators:</i>

All standard operators implement the same logic as for [Array]: 

* [map] - standard remapping processor for the iterable
* [filter] - standard filter processor for the iterable
* [reduce] - executes standard `reducer` on iterable values  

#### <i>Extended operators:</i>

* `toArray()` - produces a one-value iterable, with array of all values
* `stop((value, index) => boolean)` - stops the iterable when the callback returns a truthy value

[Iterable]:https://javascript.info/iterable
[Array]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

