/* global describe, it */
'use strict'

const expect = require('chai').expect
const sortObjectKeys = require('../index')

describe('#sort-object-keys()', () => {
  it('should sort numerical keys', () => {
    const unsorted = {
      '3': 3,
      '1': 1,
      '2': 2,
      '0': 0
    }
    const result = JSON.stringify(sortObjectKeys(unsorted))
    const expected = JSON.stringify({
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3
    })
    expect(result).to.equal(expected)
  })

  it('should sort alphabetical keys', () => {
    const unsorted = {
      'd': 3,
      'b': 1,
      'c': 2,
      'a': 0
    }
    const result = JSON.stringify(sortObjectKeys(unsorted))
    const expected = JSON.stringify({
      'a': 0,
      'b': 1,
      'c': 2,
      'd': 3
    })
    expect(result).to.equal(expected)
  })
})
