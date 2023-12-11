'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post_media.init({
    post_id: DataTypes.STRING,
    index_post_media: DataTypes.INTEGER,
    media_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post_media',
  });
  return post_media;
};