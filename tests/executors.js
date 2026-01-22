'use strict'

function setCoolingFanThresholdExecutor (params) {
  return async ({ dev }) => {
    return await dev.setCoolingFanThreshold(params)
  }
}

async function getStatsExecutor ({ dev }) {
  const snap = await dev.getSnap()
  return {
    success: true,
    stats: snap.stats
  }
}

module.exports = {
  setCoolingFanThresholdExecutor,
  getStatsExecutor
}
