const modelsMock = require('../utils/mocks/models.js');

class DataBase {
  constructor() {
    this.database = modelsMock;
  }

  async getAll() {
    const models = await Promise.resolve(modelsMock);
    return models;
  }

  async getOne(modelId) {
    console.log(modelId);
    const model = await Promise.resolve(modelsMock[0]);
    return model;
  }

  async create(model) {
    console.log(model);
    const modelCreated = await Promise.resolve(modelsMock[0].id);
    return modelCreated;
  }

  async update(modelId, model) {
    console.log(modelId, model);
    const modelUpdated = await Promise.resolve(modelsMock[0].id);
    return modelUpdated;
  }

  async delete(modelId) {
    console.log(modelId);
    const modelDeleted = await Promise.resolve(modelsMock[0].id);
    return modelDeleted;
  }
}

module.exports = DataBase;
