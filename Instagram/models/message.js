'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  message.init({
    from_user_id: DataTypes.STRING,
    to_user_id: DataTypes.STRING,
    group_id: DataTypes.STRING,
    message_text: DataTypes.STRING,
    sent_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};