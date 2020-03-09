const models = require('../database/models');
//const models = [];

//console.log(models);

const create = async model => {
  try {
    const created_model = await models.Model.create(model);
    return created_model;
  } catch (error) {
    throw new Error('Error createing model');
    //return error.name;
  }
};

const getAll = async () => {
  try {
    const modelGet = await models.Model.findAll({
      include: [
        {
          model: models.Score,
          as: 'scores'
        }
      ]
    });
    return modelGet;
  } catch (error) {
    throw new Error('Error gettig model');
    //return error;
  }
};

const getById = async modelId => {
  try {
    const model = await models.Model.findOne({
      where: { id: modelId },
      include: [
        {
          model: models.Score,
          as: 'scores'
        }
      ]
    });
    return model;
  } catch (error) {
    throw new Error('Error gettig model');
    //return error;
  }
};

const update = async (modelId, model) => {
  try {
    const created_model = await models.Model.update(model, {
      where: { id: modelId }
    });
    return created_model;
  } catch (error) {
    throw new Error('Error updating model');
    //return error.name;
  }
};

const deleteIt = async modelId => {
  try {
    const deleted = await models.Model.destroy({
      where: { id: modelId }
    });
    if (deleted) {
      return 'model deleted';
    }
    throw new Error('Model not found');
  } catch (error) {
    throw new Error('Error deleting model');
    //return error.name;
  }
};

/* const getAllModesl = async (req, res) => {
  try {
    const posts = await models.Model.findAll({
      include: [
        {
          model: models.Score,
          as: 'scores'
        }
      ]
    });
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}; */

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteIt
};
