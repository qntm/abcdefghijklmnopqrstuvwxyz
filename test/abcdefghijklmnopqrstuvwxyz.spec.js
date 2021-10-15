/* eslint-env mocha */

import { abcdefghijklmnopqrstuvwxyz } from '../src/abcdefghijklmnopqrstuvwxyz.js'
import assert from 'assert'

describe('`abcdefghijklmnopqrstuvwxyz`', () => {
  it('is \'abcdefghijklmnopqrstuvwxyz\'', () => {
    assert.deepStrictEqual(abcdefghijklmnopqrstuvwxyz, 'abcdefghijklmnopqrstuvwxyz')
  })
})
