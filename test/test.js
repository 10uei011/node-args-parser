'use strict'

/* global it */

const assert = require('assert')
const Parse = require('../')

it("node ./script.js -a 1 -b 2", () => {
  // arrange
  const args = ['node', './script.js', '-a', '1', '-b', '2']
  const expected = {
  	a: 1,
  	b: 2
  }

  // act
  const actual = Parse(args)

  // assert
  assert.deepEqual(actual, expected)
})

it("node ./script.js -a 1 -b 2 -f", () => {
  // arrange
  const args = ['node', './script.js', '-a', '1', '-b', '2', '-f']
  const expected = {
  	a: 1,
  	b: 2,
  	f: true
  }

  // act
  const actual = Parse(args)

  // assert
  assert.deepEqual(actual, expected)
})