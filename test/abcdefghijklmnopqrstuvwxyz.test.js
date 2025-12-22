import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { abcdefghijklmnopqrstuvwxyz } from '../src/abcdefghijklmnopqrstuvwxyz.js'

describe('`abcdefghijklmnopqrstuvwxyz`', () => {
  it('is \'abcdefghijklmnopqrstuvwxyz\'', () => {
    assert.deepEqual(abcdefghijklmnopqrstuvwxyz, 'abcdefghijklmnopqrstuvwxyz')
  })
  it('has a length of 26 characters', () => {
    assert.deepEqual(abcdefghijklmnopqrstuvwxyz.length, 26)
  })
})
