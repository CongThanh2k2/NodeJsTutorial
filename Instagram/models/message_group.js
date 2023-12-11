'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message_group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  message_group.init({
    user_id_created: DataTypes.STRING,
    group_name: DataTypes.STRING,
    image: DataTypes.STRING,
    request_to_join: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'message_group',
  });
  return message_group;
};