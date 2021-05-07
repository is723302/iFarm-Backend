const joi = require('@hapi/joi');

const messageIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const messageDateSchema = joi.date();
const messageSchema = joi.string();
const messageSenderIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const messageAddresseeIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);


const createMessageSchema = {
    date: messageDateSchema.required(),
    message: messageSchema.required(),
    sender_id: messageSenderIdSchema.required(),
    addressee_id: messageAddresseeIdSchema.required()
};

const updateMessageSchema = {
    date: messageDateSchema,
    message: messageSchema,
    sender_id: messageSenderIdSchema,
    addressee_id: messageAddresseeIdSchema
};

module.exports = {
    messageIdSchema,
    createMessageSchema,
    updateMessageSchema
};

