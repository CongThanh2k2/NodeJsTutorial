'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fillter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fillter.init({
    fillter_name: DataTypes.STRING,
    fillter: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fillter',
  });
  return Fillter;
};