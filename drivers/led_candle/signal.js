'use strict';

const { RFSignal } = require('homey-rfdriver');

class LEDCandleSignal extends RFSignal {

  static FREQUENCY = 'ir';
  static ID = 'led_candle';

}

module.exports = LEDCandleSignal;
