const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Community extends Model {}

Community.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    community_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'community',
  }
);

module.exports = Community;