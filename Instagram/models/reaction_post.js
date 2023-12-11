'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reaction_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reaction_post.init({
    used_id: DataTypes.STRING,
    post_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reaction_post',
  });
  return reaction_post;
};