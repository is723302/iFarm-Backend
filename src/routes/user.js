const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const {
    userIdSchema,
    createUserSchema,
    updateUserSchema
} = require('./../utils/schemas/user');
const validationHandler = require('./../utils/middleware/validationHandler');

function userApi(app) {
    app.use('/api/users', router);

    const userController = new UserController();

    router.post(
        '/',
        validationHandler(createUserSchema),
        async function (req, res, next) {
            const { body: user } = req;
            try {
                const createdUserId = await userController.createUser({ user });
                res.status(201).json({
                    data: createdUserId,
                    message: 'user created'
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
                const users = await userController.getUsers(req.query);
                res.status(200).json({
                    data: users,
                    message: 'users listed'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.get(
        '/:userId',
        validationHandler({ userId: userIdSchema }, 'params'),
        async function (req, res, next) {
            const { userId } = req.params;
            try {
                const user = await userController.getUser({ userId });
                res.status(200).json({
                    data: user,
                    message: 'user retrieved'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.put(
        '/:userId',
        validationHandler({ userId: userIdSchema }, 'params'),
        validationHandler(updateUserSchema),
        async function (req, res, next) {
            const { userId } = req.params;
            const { body: user } = req;
            try {
                const updatedUserId = await userController.updateUser({
                    userId,
                    user
                });
                res.status(200).json({
                    data: updatedUserId,
                    message: 'user updated'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.delete(
        '/:userId',
        validationHandler({ userId: userIdSchema }, 'params'),
        async function (req, res, next) {
            const { userId } = req.params;
            try {
                const deletedUserId = await userController.deleteUser({ userId });
                res.status(200).json({
                    data: deletedUserId,
                    message: 'user deleted'
                });
            } catch (err) {
                next(err);
            }
        }
    );
}

module.exports = userApi;