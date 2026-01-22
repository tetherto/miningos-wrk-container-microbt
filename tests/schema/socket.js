'use strict'

function swtichSocketValidateGenerator (state) {
  return {
    type: 'object',
    children: {
      pdu_data: {
        type: 'array',
        children: {
          pdu: { type: 'string' },
          sockets: {
            type: 'array',
            children: { socket: { type: 'string' }, enabled: { type: 'boolean', enum: [state] } }
          }
        }
      }
    }
  }
}

module.exports = (v) => {
  v.sockets_on_validate.schema.stats.children.container_specific = swtichSocketValidateGenerator(true)
  v.sockets_off_validate.schema.stats.children.container_specific = swtichSocketValidateGenerator(false)
  v.sockets_on_batch_validate = {
    type: 'function',
    func: ({ t }, data) => {
      const pduData = data.stats.container_specific.pdu_data
      t.is(pduData[0].sockets[1].enabled, true, 'pdu 0 socket 1 should be on')
      t.is(pduData[1].sockets[2].enabled, true, 'pdu 1 socket 2 should be on')
    }
  }
  v.sockets_off_batch_validate = {
    type: 'function',
    func: ({ t }, data) => {
      const pduData = data.stats.container_specific.pdu_data
      t.ok(Array.isArray(pduData), 'pdu_data should be an array')
      if (pduData.length > 0) {
        t.ok(pduData[0].sockets, 'pdu_data[0] should have sockets')
        t.ok(Array.isArray(pduData[0].sockets), 'sockets should be an array')
      }
    }
  }
}
