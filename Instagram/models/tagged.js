'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tagged extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tagged.init({
    user_id: DataTypes.STRING,
    post_media_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tagged',
  });
  return Tagged;
};