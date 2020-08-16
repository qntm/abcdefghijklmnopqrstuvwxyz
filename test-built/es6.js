// I want to write '..' here, but I can't figure out a way to get Babel to
// follow `package.json`'s "module" property instead of its "main" property
import { abcdefghijklmnopqrstuvwxyz } from '../dist/es6/abcdefghijklmnopqrstuvwxyz'

if (abcdefghijklmnopqrstuvwxyz !== 'abcdefghijklmnopqrstuvwxyz') {
  throw Error()
}
