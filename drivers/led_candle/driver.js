'use strict';

const { RFDriver } = require('homey-rfdriver');
const LEDCandleSignal = require('./signal');

class LEDCandleDriver extends RFDriver {

  static SIGNAL = LEDCandleSignal;

}

module.exports = LEDCandleDriver;
