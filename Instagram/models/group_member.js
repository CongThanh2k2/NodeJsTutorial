'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  group_member.init({
    user_id: DataTypes.STRING,
    group_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'group_member',
  });
  return group_member;
};