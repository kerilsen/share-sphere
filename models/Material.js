const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Material extends Model {}

Material.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    material_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50,
    },
    availability: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    community_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'community',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'material',
  }
);

module.exports = Material;