const DataBase = require('../lib/db.js');

class ModelsService {
  constructor() {
    this.collection = 'models';
    this.db = new DataBase();
  }

  async getModels() {
    const models = await this.db.getAll();
    return models || [];
  }

  async getModel({ modelId }) {
    const model = await this.db.getOne(modelId);
    return model || {};
  }

  async createModel({ model }) {
    const modelCreatedId = await this.db.create(model);
    return modelCreatedId || [];
  }

  async updateModel({ modelId, model }) {
    const modelUpdatedId = await await this.db.update(modelId, model);
    return modelUpdatedId;
  }
}

module.exports = ModelsService;
