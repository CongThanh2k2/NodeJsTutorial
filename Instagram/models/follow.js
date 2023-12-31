'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  follow.init({
    follower_user_id: DataTypes.STRING,
    following_user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'follow',
  });
  return follow;
};