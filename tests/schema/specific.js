'use strict'

module.exports = () => ({
  threshold_validate: {
    type: 'schema',
    schema: {
      success: { type: 'boolean', enum: [true] },
      stats: {
        type: 'object',
        children: {
          container_specific: {
            type: 'object',
            children: {
              cdu: {
                type: 'object',
                children: {
                  cooling_fan_running_speed_threshold: { type: 'number', optional: true },
                  cooling_fan_start_temperature_threshold: { type: 'number', optional: true },
                  cooling_fan_stop_temperature_threshold: { type: 'number', optional: true }
                }
              }
            }
          }
        }
      }
    }
  }
})
