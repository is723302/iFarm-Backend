const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/message");
const {
    messageIdSchema,
    createMessageSchema,
    updateMessageSchema
} = require('./../utils/schemas/message');
const validationHandler = require('./../utils/middleware/validationHandler');

function messageApi(app) {
    app.use('/api/messages', router);

    const messageController = new MessageController();

    router.post(
        '/',
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