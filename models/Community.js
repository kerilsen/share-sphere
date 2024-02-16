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
      defaultValue: 123456
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'community',
    foreign_key_checks: 0
  }
);

module.exports = Community;