'use strict'

class Thermostat {
    constructor() {
        this.temperature = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.powerSavingMode = true;
        this.MAX_LIMIT_PSM_ON = 25;
        this.MAX_LIMIT_PSM_OFF = 32;
        this.DEFAULT_TEMPERATURE = 20;
        this.MEDIUM_ENERGY_LIMIT = 18;
    }
    getCurrentTemperature() {
        return this.temperature;
    }
    up() {
      if (this.isMaxiumumTemperature()){
        return;
      }
        this.temperature += 1
    }
    down() {
        if (this.isMinimumTemperature()){
            return;
        }
        this.temperature -= 1
    }
    isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE
    }
    isMaxiumumTemperature() {
      if (this.isPowerSavingModeOn() === false) {
        return this.temperature === this.MAX_LIMIT_PSM_OFF;
      }
      return this.temperature === this.MAX_LIMIT_PSM_ON;
    }
    isPowerSavingModeOn() {
        return this.powerSavingMode === true;
    }
    switchPowerSavingModeOff() {
        this.powerSavingMode = false;
    }
    switchPowerSavingModeOn() {
        this.powerSavingMode = true;
    }
    resetTemperature() {
      this.temperature = this.DEFAULT_TEMPERATURE;
    }
    energyUsage() {
      if(this.temperature < 18) {
        return 'low-usage'
      }
      if(this.temperature >= this.MEDIUM_ENERGY_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
        return 'medium-usage'
    }
    return 'high-usage'
    }
}