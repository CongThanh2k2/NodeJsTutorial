'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tagged_on_post_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tagged_on_post_media.init({
    user_id: DataTypes.STRING,
    post_media_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tagged_on_post_media',
  });
  return tagged_on_post_media;
};