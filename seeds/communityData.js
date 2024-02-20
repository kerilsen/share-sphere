const { Community } = require('../models')
const communityData = [
    {
        community_name: "East Bay",
        zip_id: 1,
    },
    { 
        community_name: "Peninsula",
        zip_id: 2,
    },
    {
        community_name: "South Bay",
        zip_id: 3,
    }
];

const seedCommunities = () => Community.bulkCreate(communityData);

module.exports = seedCommunities;