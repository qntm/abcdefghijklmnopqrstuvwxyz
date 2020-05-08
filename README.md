# abcdefghijklmnopqrstuvwxyz

This package exports a single lower-case 26-character string containing the modern English alphabet, suitable for using as-is, or for safely interpolating, without the need for escaping, into nearly any context. The purpose of this package is to reduce the need for repetitious typing and the risk of typographical errors, and to serve as a lightweight alternative to the [`alphabet` package](https://www.npmjs.com/package/alphabet), with a relatively clean, streamlined API.


## Installation

```bash
npm install abcdefghijklmnopqrstuvwxyz
```

## Usage

### ES6

```js
import { abcdefghijklmnopqrstuvwxyz } from 'abcdefghijklmnopqrstuvwxyz'

console.log(abcdefghijklmnopqrstuvwxyz)
// "abcdefghijklmnopqrstuvwxyz"
```

### CommonJS

```js
const { abcdefghijklmnopqrstuvwxyz } = require('abcdefghijklmnopqrstuvwxyz')

console.log(abcdefghijklmnopqrstuvwxyz)
// "abcdefghijklmnopqrstuvwxyz"
```

### In the browser

Load this file in the browser to gain access to a `abcdefghijklmnopqrstuvwxyz` global representing the `abcdefghijklmnopqrstuvwxyz` package.

```html
<script src="https://unpkg.com/abcdefghijklmnopqrstuvwxyz@2/dist/iife/abcdefghijklmnopqrstuvwxyz.js" crossorigin></script>
<script>
  console.log(abcdefghijklmnopqrstuvwxyz)
  // { abcdefghijklmnopqrstuvwxyz: 'abcdefghijklmnopqrstuvwxyz' }
</script>
```
