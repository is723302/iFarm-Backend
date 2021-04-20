const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const userEmailSchema = joi.string().email();
const userNameSchema = joi.string().max(60);
const userPasswordSchema = joi.string();
const userRoleSchema = joi.string();
const userProfilePicSchema = joi.string();
const supervisorIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const greenhousesIdSchema = joi.array();

const createUserSchema = {
    email: userEmailSchema.required(),
    name: userNameSchema.required(),
    password: userPasswordSchema.required(),
    role: userRoleSchema.required(),
    profile_pic: userProfilePicSchema.required(),
    supervisor_id: supervisorIdSchema,
    greenhouses_id: greenhousesIdSchema.required(),
};

const updateUserSchema = {
    email: userEmailSchema,
    name: userNameSchema,
    password: userPasswordSchema,
    role: userRoleSchema,
    profile_pic: userProfilePicSchema,
    supervisor_id: supervisorIdSchema,
    greenhouses_id: greenhousesIdSchema,
};

module.exports = {
    userIdSchema,
    createUserSchema,
    updateUserSchema
};

