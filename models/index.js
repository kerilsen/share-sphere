const User = require('./User');
const Material = require('./Material');
const Community = require('./Community');
const CommunityMembers = require('./communityMembers');

User.hasMany(Material, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Material.belongsTo(User, {
  foreignKey: 'user_id'
});

Community.hasMany(Material, {
  foreignKey: 'community_id',
  onDelete: 'CASCADE'
});

Material.belongsTo(Community, {
  foreignKey: 'community_id'
});

User.belongsToMany(Community, {
    through: {
        model: CommunityMembers,
        unique: false
    },
    as: "populated_communities"
});

Community.belongsToMany(User, {
    through: {
        model: CommunityMembers,
        unique: false
    },
    as: "community_members"
});

module.exports = { User, Material, Community, CommunityMembers };