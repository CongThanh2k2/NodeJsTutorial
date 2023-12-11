'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reaction_reply_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reaction_reply_comment.init({
    user_id: DataTypes.STRING,
    reply_comment_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reaction_reply_comment',
  });
  return reaction_reply_comment;
};