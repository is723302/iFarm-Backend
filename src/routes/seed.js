const express = require("express");
const router = express.Router();
const SeedController = require("../controllers/seed");
const {
    seedIdSchema,
    createSeedSchema,
    updateSeedSchema
} = require('./../utils/schemas/seed');
const validationHandler = require('./../utils/middleware/validationHandler');

function seedApi(app) {
    app.use('/api/seeds', router);

    const seedController = new SeedController();

    router.post(
        '/',
        validationHandler(createSeedSchema),
        async function (req, res, next) {
            const { body: seed } = req;
            try {
                const createdSeedId = await seedController.createSeed({ seed });
                res.status(201).json({
                    data: createdSeedId,
                    message: 'seed created'
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
                const seeds = await seedController.getSeeds(req.query);
                res.status(200).json({
                    data: seeds,
                    message: 'seeds listed'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.get(
        '/:seedId',
        validationHandler({ seedId: seedIdSchema }, 'params'),
        async function (req, res, next) {
            const { seedId } = req.params;
            try {
                const seed = await seedController.getSeed({ seedId });
                res.status(200).json({
                    data: seed,
                    message: 'seed retrieved'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.put(
        '/:seedId',
        validationHandler({ seedId: seedIdSchema }, 'params'),
        validationHandler(updateSeedSchema),
        async function (req, res, next) {
            const { seedId } = req.params;
            const { body: seed } = req;
            try {
                const updatedSeedId = await seedController.updateSeed({
                    seedId,
                    seed
                });
                res.status(200).json({
                    data: updatedSeedId,
                    message: 'seed updated'
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.delete(
        '/:seedId',
        validationHandler({ seedId: seedIdSchema }, 'params'),
        async function (req, res, next) {
            const { seedId } = req.params;
            try {
                const deletedSeedId = await seedController.deleteSeed({ seedId });
                res.status(200).json({
                    data: deletedSeedId,
                    message: 'seed deleted'
                });
            } catch (err) {
                next(err);
            }
        }
    );
}

module.exports = seedApi;