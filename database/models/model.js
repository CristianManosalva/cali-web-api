'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Model',
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      user_name: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
      location_model: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      state_user: DataTypes.INTEGER
    },
    {}
  );
  Model.associate = function(models) {
    Model.hasMany(models.Score, {
      foreignKey: 'modelId',
      as: 'scores',
      onDelete: 'CASCADE'
    });
  };
  return Model;
};
