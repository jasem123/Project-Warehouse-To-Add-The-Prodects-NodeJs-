'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    titel: DataTypes.STRING
  }, {});
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};