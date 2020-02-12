/* eslint-env jest */

'use strict'

import { abcdefghijklmnopqrstuvwxyz } from './abcdefghijklmnopqrstuvwxyz'

describe('`abcdefghijklmnopqrstuvwxyz`', () => {
  it('is \'abcdefghijklmnopqrstuvwxyz\'', () => {
    expect(abcdefghijklmnopqrstuvwxyz).toBe('abcdefghijklnmopqrstuvwxyz')
  })
})
