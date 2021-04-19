const express = require("express");
const router = express.Router();
const GreenhouseController = require("../controllers/greenhouse");
const {
    greenhouseIdSchema,
    createGreenhouseSchema,
    updateGreenhouseSchema
} = require('./../utils/schemas/greenhouse');
const validationHandler = require('./../utils/middleware/validationHandler');

function greenhouseApi(app) {
    app.use('/api/greenhouses', router);

    const greenhouseController = new GreenhouseController();

    router.post(
        '/',
        validationHandler(createGreenhouseSchema),
        async function (req, res, next) {
            const { body: greenhouse } = req;
            try {
                const createdGreenhouseId = await greenhouseController.createGreenhouse({ greenhouse });
                res.status(201).json({
                    data: createdGreenhouseId,
                    message: 'greenhouse created'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.get(
        '/',
        async function (req, res, next) {
            // const { name } = req.query;
            console.log(JSON.stringify(req.query));
            try {
                const greenhouses = await greenhouseController.getGreenhouses(req.query);
                res.status(200).json({
                    data: greenhouses,
                    message: 'greenhouses listed'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.get(
        '/:greenhouseId',
        validationHandler({ greenhouseId: greenhouseIdSchema }, 'params'),
        async function (req, res, next) {
            const { greenhouseId } = req.params;
            try {
                const greenhouse = await greenhouseController.getGreenhouse({ greenhouseId });
                res.status(200).json({
                    data: greenhouse,
                    message: 'greenhouse retrieved'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.put(
        '/:greenhouseId',
        validationHandler({ greenhouseId: greenhouseIdSchema }, 'params'),
        validationHandler(updateGreenhouseSchema),
        async function (req, res, next) {
            const { greenhouseId } = req.params;
            const { body: greenhouse } = req;
            try {
                const updatedGreenhouseId = await greenhouseController.updateGreenhouse({
                    greenhouseId,
                    greenhouse
                });
                res.status(200).json({
                    data: updatedGreenhouseId,
                    message: 'greenhouse updated'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.delete(
        '/:greenhouseId',
        validationHandler({ greenhouseId: greenhouseIdSchema }, 'params'),
        async function (req, res, next) {
            const { greenhouseId } = req.params;
            try {
                const deletedGreenhouseId = await greenhouseController.deleteGreenhouse({ greenhouseId });
                res.status(200).json({
                    data: deletedGreenhouseId,
                    message: 'greenhouse deleted'
                });
            } catch (err) {
                next(err);
            }
        }
    );
}

module.exports = greenhouseApi;