'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reply_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reply_comment.init({
    created_user_id: DataTypes.STRING,
    comment_id: DataTypes.STRING,
    created_time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reply_comment',
  });
  return reply_comment;
};