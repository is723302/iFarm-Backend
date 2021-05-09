const joi = require('@hapi/joi');

const seedIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const seedNameSchema = joi.string().max(20);
const seedTimeSchema = joi.number();
const seedPHSchema = joi.number();
const seedLightSchema = joi.number();
const seedHumiditySchema = joi.number();
const seedTemperatureSchema = joi.number();
const seedImageSchema = joi.string();

const createSeedSchema = {
    name: seedNameSchema.required(),
    time: seedTimeSchema.required(),
    min_pH: seedPHSchema.required(),
    max_pH: seedPHSchema.required(),
    min_red_light: seedLightSchema.required(),
    max_red_light: seedLightSchema.required(),
    min_blue_light: seedLightSchema.required(),
    max_blue_light: seedLightSchema.required(),
    min_humidity: seedHumiditySchema.required(),
    max_humidity: seedHumiditySchema.required(),
    min_temperature: seedTemperatureSchema.required(),
    max_temperature: seedTemperatureSchema.required(),
    image: seedImageSchema
};

const updateSeedSchema = {
    name: seedNameSchema,
    time: seedTimeSchema,
    min_pH: seedPHSchema,
    max_pH: seedPHSchema,
    min_red_light: seedLightSchema,
    max_red_light: seedLightSchema,
    min_blue_light: seedLightSchema,
    max_blue_light: seedLightSchema,
    min_humidity: seedHumiditySchema,
    max_humidity: seedHumiditySchema,
    min_morning_temperature: seedTemperatureSchema,
    max_morning_temperature: seedTemperatureSchema,
    min_night_temperature: seedTemperatureSchema,
    max_night_temperature: seedTemperatureSchema,
    image: seedImageSchema
};

module.exports = {
    seedIdSchema,
    createSeedSchema,
    updateSeedSchema
};