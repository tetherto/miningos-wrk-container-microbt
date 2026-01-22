'use strict'

const { CONTAINER_TYPES } = require('./lib/constants.js')
const WrkContainerRack = require('./lib/worker-base.js')

class WrkContainerRackKehua extends WrkContainerRack {
  getThingType () {
    return super.getThingType() + `-${CONTAINER_TYPES.KEHUA}`
  }

  async connectThing (thg) {
    return await super._connectThing(thg, CONTAINER_TYPES.KEHUA)
  }
}

module.exports = WrkContainerRackKehua
