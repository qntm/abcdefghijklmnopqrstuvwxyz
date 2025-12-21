import assert from 'node:assert'
import { describe, it } from 'node:test'

import { abcdefghijklmnopqrstuvwxyz } from '../src/abcdefghijklmnopqrstuvwxyz.js'

describe('`abcdefghijklmnopqrstuvwxyz`', () => {
  it('is \'abcdefghijklmnopqrstuvwxyz\'', () => {
    assert.deepStrictEqual(abcdefghijklmnopqrstuvwxyz, 'abcdefghijklmnopqrstuvwxyz')
  })
  it('has a length of 26 characters', () => {
    assert.deepStrictEqual(abcdefghijklmnopqrstuvwxyz.length, 26)
  })
})
