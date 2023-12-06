'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saved extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Saved.init({
    user_id: DataTypes.STRING,
    post_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Saved',
  });
  return Saved;
};