const messageModel = require("../models/message");

class MessageController {
    async createMessage({ message }) {
        const createdMessageId = await messageModel.create(message);
        return createdMessageId;
    }

    async getMessages(filters) {
        const messages = await messageModel.getAll(filters);
        return messages || [];
    };

    async getMessage({ messageId }) {
        const message = await messageModel.get(messageId);
        return message || {};
    };

    async updateMessage({ messageId, message } = {}) {
        const updatedMessageId = await messageModel.update(
            messageId,
            message
        );
        return updatedMessageId;
    }

    async deleteMessage({ messageId }) {
        const deletedMessageId = await messageModel.delete(messageId);
        return deletedMessageId;
    }
}

module.exports = MessageController;