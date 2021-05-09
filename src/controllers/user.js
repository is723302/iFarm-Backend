const userModel = require("../models/user");
const bcrypt = require('bcryptjs');

class UserController {
    async createUser({ user }) {
        const { password } = user;
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.profile_pic = "https://ifarm-app-images.s3.amazonaws.com/images/profilePics/generic.jpg"
        if(!user.google_id) {
            user.google_id = "";
        }
        if(!user.greenhouses_id){
            user.greenhouses_id = []
        }
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

    async getUserByEmail({ email }) {
        const [ user ] = await userModel.getAll({ email });
        return user || {};
    };

    async updateUser({ userId, user } = {}) {
        if(user.password) {
            const { password } = user;
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }
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