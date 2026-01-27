'use strict'

const path = require('path')
const { getSchema } = require(path.join(process.cwd(), 'tests/utils'))
const { setCoolingFanThresholdExecutor, getStatsExecutor } = require('../executors')
const defaults = getSchema()

module.exports = () => ({
  setCoolingFanThreshold: {
    stages: [
      {
        name: 'setCoolingFanThreshold',
        executor: setCoolingFanThresholdExecutor({
          runningSpeed: 2,
          startTemp: 25,
          stopTemp: 25
        }),
        validate: defaults.success_validate
      },
      {
        name: 'check if values are set',
        wait: 3000,
        executor: getStatsExecutor,
        validate: defaults.threshold_validate
      }
    ]
  }
})
