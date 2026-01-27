'use strict'

const test = require('brittle')
const libAlerts = require('../../workers/lib/alerts')

test('libAlerts - is an object', (t) => {
  t.ok(typeof libAlerts === 'object')
  t.ok(libAlerts !== null)
})

test('libAlerts - has specs property', (t) => {
  t.ok(libAlerts.specs)
  t.ok(typeof libAlerts.specs === 'object')
})

test('libAlerts - has container specs', (t) => {
  t.ok(libAlerts.specs.container)
  t.ok(typeof libAlerts.specs.container === 'object')
})

test('libAlerts - container specs equals container_default', (t) => {
  // This test verifies that the container specs are set to container_default
  // as per the implementation: libAlerts.specs.container = libAlerts.specs.container_default
  t.alike(libAlerts.specs.container, libAlerts.specs.container_default)
})

test('libAlerts - container_default exists', (t) => {
  t.ok(libAlerts.specs.container_default)
  t.ok(typeof libAlerts.specs.container_default === 'object')
})
