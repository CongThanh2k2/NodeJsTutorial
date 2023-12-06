'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    created_user_id: DataTypes.STRING,
    post_type: DataTypes.STRING,
    created_time: DataTypes.DATE,
    caption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};