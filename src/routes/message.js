const express = require("express");
const router = express.Router();
const passport = require("passport");
require('./../utils/auth/strategies/jwt');
const MessageController = require("../controllers/message");
const {
    messageIdSchema,
    createMessageSchema,
    updateMessageSchema
} = require('./../utils/schemas/message');
const validationHandler = require('./../utils/middleware/validationHandler');
const scopesValidationHandler = require('./../utils/middleware/scopesValidationHandler');

function messageApi(app) {
    app.use('/api/messages', router);

    const messageController = new MessageController();

    router.post(
        '/',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['create:message']),
        validationHandler(createMessageSchema),
        async function (req, res, next) {
            const { body: message } = req;
            try {
                const createdMessageId = await messageController.createMessage({ message });
                res.status(201).json({
                    data: createdMessageId,
                    message: 'message created'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.get(
        '/',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['read:message']),
        async function (req, res, next) {
            try {
                const messages = await messageController.getMessages(req.query);
                res.status(200).json({
                    data: messages,
                    message: 'messages listed'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.get(
        '/:messageId',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['read:message']),
        validationHandler({ messageId: messageIdSchema }, 'params'),
        async function (req, res, next) {
            const { messageId } = req.params;
            try {
                const message = await messageController.getMessage({ messageId });
                res.status(200).json({
                    data: message,
                    message: 'message retrieved'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.put(
        '/:messageId',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['update:message']),
        validationHandler({ messageId: messageIdSchema }, 'params'),
        validationHandler(updateMessageSchema),
        async function (req, res, next) {
            const { messageId } = req.params;
            const { body: message } = req;
            try {
                const updatedMessageId = await messageController.updateMessage({
                    messageId,
                    message
                });
                res.status(200).json({
                    data: updatedMessageId,
                    message: 'message updated'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.delete(
        '/:messageId',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['delete:message']),
        validationHandler({ messageId: messageIdSchema }, 'params'),
        async function (req, res, next) {
            const { messageId } = req.params;
            try {
                const deletedMessageId = await messageController.deleteMessage({ messageId });
                res.status(200).json({
                    data: deletedMessageId,
                    message: 'message deleted'
                });
            } catch (err) {
                next(err);
            }
        }
    );
}

module.exports = messageApi;