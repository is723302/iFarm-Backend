const userModel = require("../models/user");

class UserController {
    async createUser({ user }) {
        const createdUserId = await userModel.create(user);
        return createdUserId;
    }

    async getUsers(filters) {
        const users = await userModel.getAll(filters);
        return users || [];
    };

    async getUser({ userId }) {
        const user = await userModel.get(userId);
        return user || {};
    };

    async updateUser({ userId, user } = {}) {
        const updatedUserId = await userModel.update(
            userId,
            user
        );
        return updatedUserId;
    }

    async deleteUser({ userId }) {
        const deletedUserId = await userModel.delete(userId);
        return deletedUserId;
    }
}

module.exports = UserController;