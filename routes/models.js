const express = require('express');
const ModelsService = require('../services/models.js');
const {
  createModelSchema,
  modelIdSchema,
  scoreSchema
} = require('../schemas/model');

const validationHandler = require('../utils/middleware/validationHandler');

const modelsApi = app => {
  const router = express.Router();
  app.use('/api/models', router);
  const modelsService = new ModelsService();

  router.get('/', async (req, res, next) => {
    try {
      const models = await modelsService.getModels();
      res.status(200).json({
        data: models,
        message: 'models listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.get(
    '/:modelId',
    validationHandler({ modelId: modelIdSchema }, 'params'),
    async (req, res, next) => {
      const { modelId } = req.params;
      try {
        const model = await modelsService.getModel({ modelId });
        res.status(200).json({
          data: model,
          message: 'model retrieved'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    validationHandler(createModelSchema),
    async (req, res, next) => {
      const { body: model } = req;
      try {
        const modelCreated = await modelsService.createModel({ model });

        res.status(202).json({
          data: modelCreated,
          message: 'model created'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    '/:modelId',
    validationHandler({ modelId: modelIdSchema }, 'params'),
    validationHandler(createModelSchema),
    async (req, res, next) => {
      const { modelId } = req.params;
      const { body: model } = req;

      try {
        const modelUpdated = await modelsService.updateModel({
          modelId,
          model
        });

        res.status(200).json({
          data: modelUpdated,
          message: 'model updated'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:modelId',
    validationHandler({ modelId: modelIdSchema }, 'params'),
    async (req, res, next) => {
      const { modelId } = req.params;

      try {
        const modelDeleted = await modelsService.deleteModel({ modelId });

        res.status(200).json({
          data: modelDeleted,
          message: 'model deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/scoremodel',
    validationHandler({ modelId: modelIdSchema, score_model: scoreSchema }),
    async (req, res, next) => {
      const { modelId, score_model } = req.body;

      try {
        const modelScored = await modelsService.scoreModel({
          modelId,
          score_model
        });

        res.status(200).json({
          data: modelScored,
          message: 'model scored'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.get('/get/score/average', async (req, res, next) => {
    try {
      const modelScored = await modelsService.getScoreAverage();

      res.status(200).json({
        data: modelScored,
        message: 'score average'
      });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = modelsApi;
