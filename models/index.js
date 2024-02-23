const User = require('./User');
const Material = require('./Material');
const Community = require('./Community');
const CommunityMembers = require('./CommunityMembers');
const Zipcode = require('./Zipcode');
const Post = require('./Post');
const Comment = require('./Comment');

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

Community.hasMany(Zipcode, {
  foreignKey: 'community_id',
  onDelete: 'CASCADE'
});

Zipcode.belongsTo(Community, {
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

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Material, Community, CommunityMembers, Zipcode, Post, Comment };