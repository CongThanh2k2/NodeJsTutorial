'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post_type.init({
    post_type_name: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'post_type',
  });
  return post_type;
};