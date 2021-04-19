const joi = require('@hapi/joi');

const greenhouseIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const seedIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const greenhouseNameSchema = joi.string().max(60);
const greenhousePHSchema = joi.number();
const greenhouseRedLightSchema = joi.number();
const greenhouseBlueLightSchema = joi.number();
const greenhouseHumiditySchema = joi.number();
const greenhouseTemperatureSchema = joi.number();

const createGreenhouseSchema = {
    name: greenhouseNameSchema.required(),
    pH: greenhousePHSchema.required(),
    red_light: greenhouseRedLightSchema.required(),
    blue_light: greenhouseBlueLightSchema.required(),
    humidity: greenhouseHumiditySchema.required(),
    temperature: greenhouseTemperatureSchema.required(),
    seed_id: seedIdSchema.required()
};

const updateGreenhouseSchema = {
    name: greenhouseNameSchema,
    pH: greenhousePHSchema,
    red_light: greenhouseRedLightSchema,
    blue_light: greenhouseBlueLightSchema,
    humidity: greenhouseHumiditySchema,
    temperature: greenhouseTemperatureSchema,
    seed_id: seedIdSchema
};

module.exports = {
    greenhouseIdSchema,
    createGreenhouseSchema,
    updateGreenhouseSchema
};