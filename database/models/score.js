'use strict';
module.exports = (sequelize, DataTypes) => {
  const Score = sequelize.define(
    'Score',
    {
      score_model: DataTypes.INTEGER,
      modelId: DataTypes.INTEGER
    },
    {}
  );
  Score.associate = function(models) {
    Score.belongsTo(models.Model, {
      foreignKey: 'modelId',
      as: 'scored_model',
      onDelete: 'CASCADE'
    });
  };
  return Score;
};
