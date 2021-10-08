# CHANGELOG

## 3.x.x

* Support for Node.js 10 is dropped.
* Support for CommonJS is dropped.

## 2.x.x

For better consistency when consumed as an ES6 module, `abcdefghijklmnopqrstuvwxyz`'s API has changed. Code like:

```js
const abcdefghijklmnopqrstuvwxyz = require('abcdefghijklmnopqrstuvwxyz')
```

should be refactored to:

```js
const { abcdefghijklmnopqrstuvwxyz } = require('abcdefghijklmnopqrstuvwxyz')
```

## 1.x.x

Initial release.
