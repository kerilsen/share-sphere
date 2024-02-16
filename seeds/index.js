const sequelize = require('../config/connection');
const seedCommunities = require('./communityData');
const seedUsers = require('./userData');
const seedMaterials = require('./materialData');
const seedCommunityMembers = require('./communityMembersData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCommunities();

  await seedUsers();

  await seedCommunityMembers();

  await seedMaterials();

  process.exit(0);
};

seedAll();
