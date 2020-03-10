const controllers = require('../controllers');

class ModelsService {
  constructor() {
    this.collection = 'models';
  }

  async getModels() {
    const models = await controllers.getAll();
    return models || [];
  }

  async getModel({ modelId }) {
    const model = await controllers.getById(modelId);
    return model || {};
  }

  async createModel({ model }) {
    const modelCreatedId = await controllers.create(model);
    return modelCreatedId || [];
  }

  async updateModel({ modelId, model }) {
    const modelUpdatedId = await controllers.update(modelId, model);
    return modelUpdatedId;
  }

  async deleteModel({ modelId }) {
    const modelDeletedId = await controllers.deleteIt(modelId);
    return modelDeletedId;
  }

  async scoreModel({ modelId, score }) {
    const modelScored = await controllers.putScore(modelId, score);
    return modelScored;
  }

  async getScoreAverage() {
    const scoreAverage = await controllers.getScoreAverage();
    return scoreAverage;
  }
}

module.exports = ModelsService;
