'use strict'

const test = require('brittle')
const libStats = require('../../workers/lib/stats')

test('libStats - is an object', (t) => {
  t.ok(typeof libStats === 'object')
  t.ok(libStats !== null)
})

test('libStats - has specs property', (t) => {
  t.ok(libStats.specs)
  t.ok(typeof libStats.specs === 'object')
})

test('libStats - has container specs', (t) => {
  t.ok(libStats.specs.container)
  t.ok(typeof libStats.specs.container === 'object')
})

test('libStats - container specs has ops property', (t) => {
  t.ok(libStats.specs.container.ops)
  t.ok(typeof libStats.specs.container.ops === 'object')
})

test('libStats - container_specific_stats_group operation exists', (t) => {
  const ops = libStats.specs.container.ops
  t.ok(ops.container_specific_stats_group)
  t.ok(typeof ops.container_specific_stats_group === 'object')
})

test('libStats - container_specific_stats_group has correct structure', (t) => {
  const groupOp = libStats.specs.container.ops.container_specific_stats_group

  t.is(groupOp.op, 'group_multiple_stats')
  t.ok(Array.isArray(groupOp.srcs))
  t.ok(typeof groupOp.group === 'function')
})

test('libStats - container_specific_stats_group has expected sources', (t) => {
  const sources = libStats.specs.container.ops.container_specific_stats_group.srcs
  const expectedSources = [
    'unit_inlet_pressure_p2_group',
    'unit_outlet_pressure_p3_group',
    'circulation_pump_inlet_pressure_p1_group',
    'circulation_pump_outlet_pressure_p5_group',
    'filter_pressure_difference_group',
    'makeup_water_pump_fault_group',
    'unit_inlet_temp_t2_group',
    'cooling_temp_t1_group'
  ]

  t.is(sources.length, expectedSources.length)

  for (const expectedSource of expectedSources) {
    const found = sources.find(src => src.name === expectedSource)
    t.ok(found, `Source ${expectedSource} not found`)
    t.ok(found.src, `Source ${expectedSource} missing src property`)
    t.ok(typeof found.src === 'string', `Source ${expectedSource} src is not a string`)
  }
})

test('libStats - source paths are valid', (t) => {
  const sources = libStats.specs.container.ops.container_specific_stats_group.srcs

  for (const source of sources) {
    // All source paths should start with 'last.snap.stats.container_specific.cdu.'
    t.ok(source.src.startsWith('last.snap.stats.container_specific.cdu.'),
      `Source ${source.name} has invalid path: ${source.src}`)
  }
})

test('libStats - group function is callable', (t) => {
  const groupFn = libStats.specs.container.ops.container_specific_stats_group.group

  t.ok(typeof groupFn === 'function')

  // Test that it can be called (it should be a function from miningos-lib-stats)
  t.ok(typeof groupFn === 'function', 'Group function should be callable')
})
