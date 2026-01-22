# MicroBT Container APIs

This document describes the functions exposed by the `container.js` library for Antcontainer. Below are functions common to all containers. Look at individual container documentation for specific changes if any. As of now we are not aware of any container specific changes

## Container specific documentation
- [MicroBT Wande](./microbt-wande.md)

## Common Functions

## `constructor(containerId, containerName, host, port = 502)` -> `MicroBTContainer`
Creates a new `MicroBTContainer` instance.

### Parameters
| Param  | Type | Description | Default |
| -- | -- | -- | -- |
| containerId | `string` | ID of the container (for identification purposes). | |
| containerName | `string` | Name of the container (for identification purposes). | |
| host | `string` | Hostname or IP address of the container. | |
| port | `number` | Port of the container. | `502` |

## `getSnap()` -> `Object`
Returns a snapshot of the container's state.

### Returns
| Key | Type | Description |
| -- | -- | -- |
| success | `boolean` | Status of the request. |
| model | `string` | Model of the container. |
| power_meters.status | `number` | Status of the power meter. |
| power_meters.voltage_ab | `number` | Voltage between phases A and B. |
| power_meters.voltage_bc | `number` | Voltage between phases B and C. |
| power_meters.voltage_ca | `number` | Voltage between phases C and A. |
| power_meters.total_power_factor | `number` | Total power factor. |
| power_meters.freq | `number` | Frequency. |
| power_meters.current_a | `number` | Current in phase A. |
| power_meters.current_b | `number` | Current in phase B. |
| power_meters.current_c | `number` | Current in phase C. |
| power_meters.total_active_power | `number` | Total active power. |
| power_meters.total_apparent_power | `number` | Total apparent power. |
| power_meters.total_active_energy | `number` | Total active energy. |
| pdus.status | `number` | Status of the PDU. |
| pdus.buzzer | `number` | Buzzer status. |
| pdus.sockets | `Array<boolean>` | Status of the sockets. |
| pdus.frequency | `number` | Frequency. |
| pdus.voltage_ab | `number` | Voltage between phases A and B. |
| pdus.voltage_ac | `number` | Voltage between phases A and C. |
| pdus.voltage_bc | `number` | Voltage between phases B and C. |
| pdus.current_a | `number` | Current in phase A. |
| pdus.current_b | `number` | Current in phase B. |
| pdus.current_c | `number` | Current in phase C. |
| pdus.total_power | `number` | Total power. |
| pdus.access_control_alarm | `Array<number>` | Access control alarm status. |
| pdus.infrared_alarm | `Array<number>` | Infrared alarm status. |
| pdus.water_ingress_alarm | `Array<number>` | Water ingress alarm status. |
| pdus.smoke_detection_alarm | `Array<number>` | Smoke detection alarm status. |
| pdus.high_wind_speed_alarm | `number` | High wind speed alarm status. |
| pdus.low_wind_speed_alarm | `number` | Low wind speed alarm status. |
| env.status | `number` | Status of the environment. |
| env.smoke_detector | `number` | Smoke detector status. |
| env.water_ingress_detector | `number` | Water ingress detector status. |
| env.temperature | `number` | Temperature. |
| env.humidity | `number` | Humidity. |

## `getConfig()` -> `Object`
Returns the configuration of the container.
> TODO: implement

## `switchSocket(PDUIndex, socketIndex, enabled)` -> `Object`
Switches the socket in the specified PDU on or off depending on the value of `enabled`.

### Parameters
| Param  | Type | Description |
| -- | -- | -- |
| PDUIndex | `number` | Index of the PDU. |
| socketIndex | `number` | Index of the socket. |
| enabled | `boolean` | Whether to switch the socket on or off. |

### Returns
| Key | Type | Description |
| -- | -- | -- |
| success | `boolean` | Status of the request. |

## `switchContainer(enabled)` -> `Object`
Turns on or off the container. For now, this only turns on all the devices connected to the PDUs.

### Parameters
| Param  | Type | Description |
| -- | -- | -- |
| enabled | `boolean` | Whether to switch the socket on or off. |

### Returns
| Key | Type | Description |
| -- | -- | -- |
| success | `boolean` | Status of the request. |
