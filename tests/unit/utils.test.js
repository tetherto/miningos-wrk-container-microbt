'use strict'

const test = require('brittle')
const { bufferToInt16Array, bufferToBitString } = require('../../workers/lib/utils')

test('bufferToInt16Array - signed integers', (t) => {
  const buffer = Buffer.from([0x00, 0x01, 0xFF, 0xFF, 0x7F, 0xFF])
  const result = bufferToInt16Array(buffer, false)

  t.is(result[0], 1) // 0x0001
  t.is(result[1], -1) // 0xFFFF as signed
  t.is(result[2], 32767) // 0x7FFF
})

test('bufferToInt16Array - unsigned integers', (t) => {
  const buffer = Buffer.from([0x00, 0x01, 0xFF, 0xFF, 0x7F, 0xFF])
  const result = bufferToInt16Array(buffer, true)

  t.is(result[0], 1) // 0x0001
  t.is(result[1], 65535) // 0xFFFF as unsigned
  t.is(result[2], 32767) // 0x7FFF
})

test('bufferToInt16Array - empty buffer', (t) => {
  const buffer = Buffer.alloc(0)
  const result = bufferToInt16Array(buffer)

  t.is(result.length, 0)
})

test('bufferToInt16Array - single byte buffer throws error', (t) => {
  const buffer = Buffer.from([0x01])

  try {
    bufferToInt16Array(buffer)
    t.fail('Should have thrown an error')
  } catch (error) {
    t.ok(error.code === 'ERR_BUFFER_OUT_OF_BOUNDS', 'Should throw buffer out of bounds error')
  }
})

test('bufferToBitString - basic conversion', (t) => {
  const buffer = Buffer.from([0xAA, 0x55]) // 10101010 01010101
  const result = bufferToBitString(buffer)

  t.is(result, '1010101001010101')
})

test('bufferToBitString - all zeros', (t) => {
  const buffer = Buffer.from([0x00, 0x00])
  const result = bufferToBitString(buffer)

  t.is(result, '0000000000000000')
})

test('bufferToBitString - all ones', (t) => {
  const buffer = Buffer.from([0xFF, 0xFF])
  const result = bufferToBitString(buffer)

  t.is(result, '1111111111111111')
})

test('bufferToBitString - empty buffer', (t) => {
  const buffer = Buffer.alloc(0)
  const result = bufferToBitString(buffer)

  t.is(result, '')
})

test('bufferToBitString - single byte', (t) => {
  const buffer = Buffer.from([0x80]) // 10000000
  const result = bufferToBitString(buffer)

  t.is(result, '10000000')
})
