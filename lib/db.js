const modelsMock = require('../utils/mocks/models.js');

class DataBase {
  constructor() {
    this.database = modelsMock;
  }

  async getAll() {
    const models = Promise.resolve(modelsMock);
    return models;
  }

  async getOne(modelId) {
    console.log(modelId);
    const model = Promise.resolve(modelsMock[0]);
    return model;
  }

  async create(model) {
    console.log(model);
    const modelCreated = Promise.resolve(modelsMock[0].id);
    return modelCreated;
  }

  async update(modelId, model) {
    console.log(modelId, model);
    const modelUpdated = Promise.resolve(modelsMock[0].id);
    return modelUpdated;
  }
}

module.exports = DataBase;
