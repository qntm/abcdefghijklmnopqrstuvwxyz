module.exports = [{
  // nearly indistinguishable from a copy and paste of the source
  input: 'src/abcdefghijklmnopqrstuvwxyz.js',
  output: {
    file: 'dist/es6/abcdefghijklmnopqrstuvwxyz.js',
    format: 'esm'
  }
}, {
  // same as above but Node.js-friendly
  input: 'src/abcdefghijklmnopqrstuvwxyz.js',
  output: {
    file: 'dist/cjs/abcdefghijklmnopqrstuvwxyz.js',
    format: 'cjs'
  }
}, {
  // this can be imported into the browser as a script
  input: 'src/abcdefghijklmnopqrstuvwxyz.js',
  output: {
    file: 'dist/iife/abcdefghijklmnopqrstuvwxyz.js',
    format: 'iife',
    name: 'abcdefghijklmnopqrstuvwxyz'
  }
}]
