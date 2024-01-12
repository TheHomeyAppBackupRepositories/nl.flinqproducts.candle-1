'use strict';

const { RFDevice } = require('homey-rfdriver');

class LEDCandleDevice extends RFDevice {

    static CAPABILITIES = {
      onoff: {
        true: 'POWER_ON',
        false: 'POWER_OFF',
      },
      channel_up: 'DIM_PLUS',
      channel_down: 'DIM_MINUS',
      mode_light: 'MODE_LIGHT',
      mode_candle: 'MODE_CANDLE',
    }

}

module.exports = LEDCandleDevice;
