'use strict'

module.exports = (v) => {
  v.stats_validate.schema.stats.children.alarm_status.optional = true
  v.stats_validate.schema.stats.children.power_kw = { type: 'number', optional: true }
  v.stats_validate.schema.stats.children.container_specific = {
    type: 'object',
    children: {
      power_meters: {
        type: 'array',
        children: {
          status: { type: 'number' },
          freq: { type: 'number' },
          voltage_ab: { type: 'number' },
          voltage_ca: { type: 'number' },
          voltage_bc: { type: 'number' },
          current_a: { type: 'number' },
          current_b: { type: 'number' },
          current_c: { type: 'number' },
          total_power_factor: { type: 'number' },
          total_active_power: { type: 'number' },
          total_apparent_power: { type: 'number' },
          total_active_energy: { type: 'number' }
        }
      },
      pdu_data: {
        type: 'array',
        children: {
          pdu: { type: 'string' },
          status: { type: 'number' },
          buzzer: { type: 'number' },
          sockets: {
            type: 'array',
            children: { socket: { type: 'string' }, enabled: { type: 'boolean' } }
          },
          frequency: { type: 'number' },
          voltage_ab: { type: 'number' },
          voltage_ca: { type: 'number' },
          voltage_bc: { type: 'number' },
          current_a: { type: 'number' },
          current_b: { type: 'number' },
          current_c: { type: 'number' },
          total_power: { type: 'number' },
          access_control_alarm: {
            type: 'array',
            children: { index: { type: 'string' }, status: { type: 'boolean' } }
          },
          infrared_alarm: {
            type: 'array',
            children: { index: { type: 'string' }, status: { type: 'boolean' } }
          },
          water_ingress_alarm: {
            type: 'array',
            children: { index: { type: 'string' }, status: { type: 'boolean' } }
          },
          smoke_detection_alarm: {
            type: 'array',
            children: { index: { type: 'string' }, status: { type: 'boolean' } }
          },
          high_wind_speed_alarm: { type: 'number' },
          low_wind_speed_alarm: { type: 'number' }
        }
      },
      cdu: {
        type: 'object',
        children: {
          protocol_version: { type: 'number', enum: [0.4] },
          indoor_dew_point_temperature: { type: 'number', optional: true },
          outdoor_ambient_temperature_sensor_fault: { type: 'boolean', enum: [false] },
          indoor_temperature_humidity_sensor_fault: { type: 'boolean', enum: [false] },
          makeup_water_pump_fault: { type: 'boolean', optional: true },
          power_supply_fault: { type: 'boolean', enum: [false] },
          water_immersion_fault: { type: 'boolean', enum: [false] },
          unit_inlet_temp_t2: { type: 'number', enum: [25.3] },
          unit_outlet_temp_t3: { type: 'number', enum: [25.3] },
          unit_inlet_pressure_p2: { type: 'number', enum: [25.3] },
          unit_outlet_pressure_p3: { type: 'number', enum: [25.3] },
          circulation_pump_inlet_pressure_p1: { type: 'number', enum: [25.3] },
          circulation_pump_outlet_pressure_p5: { type: 'number', enum: [25.3] },
          cooling_temp_t1: { type: 'number', enum: [25.3] },
          cooling_system_status: { type: 'number', optional: true },
          cooling_fan_switch_state: { type: 'boolean', optional: true },
          cycle_pump_control: { type: 'number', optional: true },
          cooling_fan_control: { type: 'number', optional: true },
          makeup_water_pump_control: { type: 'boolean', enum: [true] },
          cooling_fan_running_speed_threshold: { type: 'number', optional: true },
          cooling_fan_start_temperature_threshold: { type: 'number', optional: true },
          cooling_fan_stop_temperature_threshold: { type: 'number', optional: true }
        }
      }
    }
  }
}
