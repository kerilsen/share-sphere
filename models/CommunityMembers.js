const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CommunityMembers extends Model {}

CommunityMembers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    modelName: 'community_members',
  }
);

module.exports = CommunityMembers;