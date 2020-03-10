const models = require('../database/models');
//const models = [];

//console.log(models);
const sequelize = require('sequelize');

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

const putScore = async (modelId, score_model) => {
  try {
    const scoredModel = await models.Score.create({ modelId, score_model });
    return scoredModel;
  } catch (error) {
    throw new Error('Error scoring model');
    //return error.name;
  }
};

const getScoreAverage = async () => {
  try {
    const modelGet = await models.Model.findAll({
      attributes: [
        'Model.location_model',
        [
          sequelize.fn(
            'ROUND',
            sequelize.fn('AVG', sequelize.col('scores.score_model')),
            '1'
          ),
          'average_score'
        ]
      ],
      include: [
        {
          attributes: {
            exclude: ['id', 'score_model', 'modelId', 'createdAt', 'updatedAt']
          },
          model: models.Score,
          as: 'scores'
        }
      ],
      group: ['Model.location_model'],
      raw: true
    });
    return modelGet;
  } catch (error) {
    //console.log(error);
    throw new Error('Error gettig score average');
    //return error;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteIt,
  putScore,
  getScoreAverage
};
