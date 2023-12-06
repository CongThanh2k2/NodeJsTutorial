'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post_media.init({
    post_id: DataTypes.STRING,
    fillter_id: DataTypes.STRING,
    media_file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post_media',
  });
  return Post_media;
};