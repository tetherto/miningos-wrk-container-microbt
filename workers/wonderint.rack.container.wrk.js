'use strict'

const { CONTAINER_TYPES } = require('./lib/constants.js')
const WrkContainerRack = require('./lib/worker-base.js')

class WrkContainerRackWonderint extends WrkContainerRack {
  getThingType () {
    return super.getThingType() + `-${CONTAINER_TYPES.WONDERINT}`
  }

  async connectThing (thg) {
    return await super._connectThing(thg, CONTAINER_TYPES.WONDERINT)
  }
}

module.exports = WrkContainerRackWonderint
