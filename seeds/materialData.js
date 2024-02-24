const { Material } = require('../models')
const materialData = [
    { material_name: "Wheelchair", filename: "1201.jpg", cost: "$400.00", availability: 1, category: "Medical", description: "Tristique et egestas quis ipsum. Neque volutpat ac tincidunt vitae.", user_id: 36, community_id: 3 },
    { material_name: "Shade canopy", filename: "1202.jpg", cost: "$50.00", availability: 1, category: "Events", description: "Neque volutpat ac tincidunt vitae. Nunc sed blandit libero volutpat sed cras ornare.", user_id: 19, community_id: 1 },
    { material_name: "Wheelbarrow", filename: "1203.jpg", cost: "$40.00", availability: 1, category: "Hardware/Tools", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", user_id: 18, community_id: 1 },
    { material_name: "Table saw", filename: "1204.jpg", cost: "$80.00", availability: 1, category: "Hardware/Tools", description: "Tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi.", user_id: 17, community_id: 1 },
    { material_name: "Weed whacker", filename: "1205.jpg", cost: "$45.00", availability: 1, category: "Hardware/Tools", description: "Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Sagittis purus sit amet volutpat. Leo a diam sollicitudin tempor id eu.", user_id: 16, community_id: 1 },
    { material_name: "Camping tent", filename: "1247.jpg", cost: "$80.00", availability: 1, category: "Outdoor", description: "Amet consectetur adipiscing elit pellentesque habitant morbi. Ut placerat orci nulla pellentesque dignissim.", user_id: 21, community_id: 2 },
    { material_name: "Air mattress", filename: "1207.jpg", cost: "$60.00", availability: 1, category: "Outdoor", description: " Ut placerat orci nulla pellentesque dignissim. Arcu risus quis varius quam quisque id diam.", user_id: 22, community_id: 2 },
    { material_name: "Karaoke machine", filename: "1208.jpg", cost: "$50.00", availability: 1, category: "Events", description: "Arcu risus quis varius quam quisque id diam. Id semper risus in hendrerit gravida rutrum quisque.", user_id: 23, community_id: 2 },
    { material_name: "Crokinole board", filename: "1209.jpg", cost: "$20.00", availability: 1, category: "Games", description: "Id semper risus in hendrerit gravida rutrum quisque. Neque viverra justo nec ultrices dui sapien eget.", user_id: 37, community_id: 3 },
    { material_name: "Cricket equipment", filename: "1210.jpg", cost: "$150.00", availability: 1, category: "Games", description: "Neque viverra justo nec ultrices dui sapien eget. Dui sapien eget mi proin sed libero enim sed faucibus.", user_id: 15, community_id: 1 },
    { material_name: "Dungeons and Dragons RPG", filename: "1211.jpg", cost: "$40.00", availability: 1, category: "Games", description: "Dui sapien eget mi proin sed libero enim sed faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique.", user_id: 24, community_id: 2 },
    { material_name: "Super Mario Odyssey", filename: "1212.jpg", cost: "$60.00", availability: 1, category: "Games", description: "Diam phasellus vestibulum lorem sed risus ultricies tristique. Ornare massa eget egestas purus viverra accumsan in nisl.", user_id: 25, community_id: 2 },
    { material_name: "Badminton set", filename: "1213.jpg", cost: "$45.00", availability: 1, category: "Games", description: "Ornare massa eget egestas purus viverra accumsan in nisl. Phasellus vestibulum lorem sed risus.", user_id: 14, community_id: 1 },
    { material_name: "Croquet set", filename: "1214.jpg", cost: "$35.00", availability: 1, category: "Games", description: "Phasellus vestibulum lorem sed risus. Tristique et egestas quis ipsum.", user_id: 37, community_id: 3 },
    { material_name: "Lawn Bowling set", filename: "1215.jpg", cost: "$40.00", availability: 1, category: "Games", description: "Tristique et egestas quis ipsum. Neque volutpat ac tincidunt vitae.", user_id: 44, community_id: 3 },
    { material_name: "Academy of Arts and Science pass", filename: "1216.jpg", cost: "$100.00", availability: 1, category: "Explorer", description: "Neque volutpat ac tincidunt vitae. Nunc sed blandit libero volutpat sed cras ornare.", user_id: 43, community_id: 3 },
    { material_name: "Yellowstone National Park pass", filename: "1217.jpg", cost: "$80.00", availability: 1, category: "Explorer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", user_id: 26, community_id: 2 },
    { material_name: "Joshua Tree National Park pass", filename: "1218.jpg", cost: "$80.00", availability: 1, category: "Explorer", description: "Tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi.", user_id: 27, community_id: 2 },
    { material_name: "S’more maker", filename: "1219.jpg", cost: "$30.00", availability: 1, category: "Kids", description: "Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Sagittis purus sit amet volutpat. Leo a diam sollicitudin tempor id eu.", user_id: 13, community_id: 1 },
    { material_name: "Fondue machine", filename: "1220.jpg", cost: "$40.00", availability: 1, category: "Events", description: "Amet consectetur adipiscing elit pellentesque habitant morbi. Ut placerat orci nulla pellentesque dignissim.", user_id: 12, community_id: 1 },
    { material_name: "Popcorn machine", filename: "1221.jpg", cost: "$80.00", availability: 1, category: "Events", description: " Ut placerat orci nulla pellentesque dignissim. Arcu risus quis varius quam quisque id diam.", user_id: 28, community_id: 2 },
    { material_name: "Boombox", filename: "1222.jpg", cost: "$80.00", availability: 1, category: "Events", description: "Arcu risus quis varius quam quisque id diam. Id semper risus in hendrerit gravida rutrum quisque.", user_id: 29, community_id: 2 },
    { material_name: "Sno cone maker", filename: "1223.jpg", cost: "$80.00", availability: 1, category: "Kids", description: "Id semper risus in hendrerit gravida rutrum quisque. Neque viverra justo nec ultrices dui sapien eget.", user_id: 11, community_id: 1 },
    { material_name: "Cotton candy machine", filename: "1224.jpg", cost: "$200.00", availability: 1, category: "Kids", description: "Neque viverra justo nec ultrices dui sapien eget. Dui sapien eget mi proin sed libero enim sed faucibus.", user_id: 10, community_id: 1 },
    { material_name: "Folding table", filename: "1225.jpg", cost: "$40.00", availability: 1, category: "Events", description: "Dui sapien eget mi proin sed libero enim sed faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique.", user_id: 42, community_id: 3 },
    { material_name: "Folding chair", filename: "1226.jpg", cost: "$15.00", availability: 1, category: "Events", description: "Diam phasellus vestibulum lorem sed risus ultricies tristique. Ornare massa eget egestas purus viverra accumsan in nisl.", user_id: 41, community_id: 3 },
    { material_name: "Folding chair", filename: "1227.jpg", cost: "$15.00", availability: 1, category: "Events", description: "Ornare massa eget egestas purus viverra accumsan in nisl. Phasellus vestibulum lorem sed risus.", user_id: 41, community_id: 3 },
    { material_name: "Folding chair", filename: "1228.jpg", cost: "$15.00", availability: 1, category: "Events", description: "Phasellus vestibulum lorem sed risus. Tristique et egestas quis ipsum.", user_id: 41, community_id: 3 },
    { material_name: "Folding chair", filename: "1229.jpg", cost: "$15.00", availability: 1, category: "Events", description: "Tristique et egestas quis ipsum. Neque volutpat ac tincidunt vitae.", user_id: 30, community_id: 2 },
    { material_name: "Folding chair", filename: "1230.jpg", cost: "$15.00", availability: 1, category: "Events", description: "Neque volutpat ac tincidunt vitae. Nunc sed blandit libero volutpat sed cras ornare.", user_id: 31, community_id: 2 },
    { material_name: "Folding chair", filename: "1231.jpg", cost: "$15.00", availability: 1, category: "Events", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", user_id: 9, community_id: 1 },
    { material_name: "Folding chair", filename: "1232.jpg", cost: "$15.00", availability: 1, category: "Events", description: "Tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi.", user_id: 8, community_id: 1 },
    { material_name: "Folding chair", filename: "1233.jpg", cost: "$15.00", availability: 1, category: "Events", description: "Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Sagittis purus sit amet volutpat. Leo a diam sollicitudin tempor id eu.", user_id: 7, community_id: 1 },
    { material_name: "Folding table", filename: "1234.jpg", cost: "$40.00", availability: 1, category: "Events", description: "Amet consectetur adipiscing elit pellentesque habitant morbi. Ut placerat orci nulla pellentesque dignissim.", user_id: 40, community_id: 3 },
    { material_name: "Folding table", filename: "1235.jpg", cost: "$50.00", availability: 1, category: "Events", description: " Ut placerat orci nulla pellentesque dignissim. Arcu risus quis varius quam quisque id diam.", user_id: 32, community_id: 2 },
    { material_name: "Folding table", filename: "1236.jpg", cost: "$45.00", availability: 1, category: "Events", description: "Arcu risus quis varius quam quisque id diam. Id semper risus in hendrerit gravida rutrum quisque.", user_id: 6, community_id: 1 },
    { material_name: "Lawn chair", filename: "1237.jpg", cost: "$30.00", availability: 1, category: "Outdoor", description: "Id semper risus in hendrerit gravida rutrum quisque. Neque viverra justo nec ultrices dui sapien eget.", user_id: 39, community_id: 3 },
    { material_name: "Lawn chair", filename: "1238.jpg", cost: "$35.00", availability: 1, category: "Outdoor", description: "Neque viverra justo nec ultrices dui sapien eget. Dui sapien eget mi proin sed libero enim sed faucibus.", user_id: 39, community_id: 3 },
    { material_name: "Lawn chair", filename: "1239.jpg", cost: "$30.00", availability: 1, category: "Outdoor", description: "Dui sapien eget mi proin sed libero enim sed faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique.", user_id: 33, community_id: 2 },
    { material_name: "Lawn chair", filename: "1240.jpg", cost: "$25.00", availability: 1, category: "Outdoor", description: "Diam phasellus vestibulum lorem sed risus ultricies tristique. Ornare massa eget egestas purus viverra accumsan in nisl.", user_id: 33, community_id: 2 },
    { material_name: "Lawn chair", filename: "1241.jpg", cost: "$30.00", availability: 1, category: "Outdoor", description: "Ornare massa eget egestas purus viverra accumsan in nisl. Phasellus vestibulum lorem sed risus.", user_id: 5, community_id: 1 },
    { material_name: "Lawn chair", filename: "1242.jpg", cost: "$30.00", availability: 1, category: "Outdoor", description: "Phasellus vestibulum lorem sed risus. Tristique et egestas quis ipsum.", user_id: 4, community_id: 1 },
    { material_name: "Lawn mower", filename: "1243.jpg", cost: "$500.00", availability: 1, category: "Outdoor", description: "Tristique et egestas quis ipsum. Neque volutpat ac tincidunt vitae.", user_id: 3, community_id: 1 },
    { material_name: "Riding mower", filename: "1244.jpg", cost: "$750.00", availability: 1, category: "Hardware/Tools", description: "Neque volutpat ac tincidunt vitae. Nunc sed blandit libero volutpat sed cras ornare.", user_id: 38, community_id: 3 },
    { material_name: "Lawn aerator", filename: "1245.jpg", cost: "$40.00", availability: 1, category: "Hardware/Tools", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", user_id: 2, community_id: 1 },
    { material_name: "Portable fire-bowl", filename: "1246.jpg", cost: "$185.00", availability: 1, category: "Outdoor", description: "Tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi.", user_id: 1, community_id: 1 },
    { material_name: "Camping tent", filename: "1247.jpg", cost: "$80.00", availability: 1, category: "Outdoor", description: "Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Sagittis purus sit amet volutpat. Leo a diam sollicitudin tempor id eu.", user_id: 20, community_id: 1 },
    { material_name: "Walker", filename: "1248.jpg", cost: "$60.00", availability: 1, category: "Medical", description: "Amet consectetur adipiscing elit pellentesque habitant morbi. Ut placerat orci nulla pellentesque dignissim.", user_id: 50, community_id: 3 },
    { material_name: "Walker", filename: "1249.jpg", cost: "$45.00", availability: 1, category: "Medical", description: " Ut placerat orci nulla pellentesque dignissim. Arcu risus quis varius quam quisque id diam.", user_id: 49, community_id: 3 },
    { material_name: "Walker", filename: "1250.jpg", cost: "$80.00", availability: 1, category: "Medical", description: "Arcu risus quis varius quam quisque id diam. Id semper risus in hendrerit gravida rutrum quisque.", user_id: 48, community_id: 3 },
    { material_name: "Wheelchair", filename: "1251.jpg", cost: "$500.00", availability: 1, category: "Medical", description: "Id semper risus in hendrerit gravida rutrum quisque. Neque viverra justo nec ultrices dui sapien eget.", user_id: 47, community_id: 3 },
    { material_name: "Hospital bed", filename: "1252.jpg", cost: "$400.00", availability: 1, category: "Medical", description: "Neque viverra justo nec ultrices dui sapien eget. Dui sapien eget mi proin sed libero enim sed faucibus.", user_id: 46, community_id: 3 },
    { material_name: "Play sprinkler", filename: "1253.jpg", cost: "$35.00", availability: 1, category: "Kids", description: "Dui sapien eget mi proin sed libero enim sed faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique.", user_id: 19, community_id: 1 },
    { material_name: "Lemonade stand", filename: "1254.jpg", cost: "$75.00", availability: 1, category: "Kids", description: "Diam phasellus vestibulum lorem sed risus ultricies tristique. Ornare massa eget egestas purus viverra accumsan in nisl.", user_id: 18, community_id: 1 },
    { material_name: "Portable stage", filename: "1255.jpg", cost: "$100.00", availability: 1, category: "Events", description: "Ornare massa eget egestas purus viverra accumsan in nisl. Phasellus vestibulum lorem sed risus.", user_id: 34, community_id: 2 },
    { material_name: "Lego duplo train", filename: "1256.jpg", cost: "$40.00", availability: 1, category: "Kids", description: "Phasellus vestibulum lorem sed risus. Tristique et egestas quis ipsum.", user_id: 17, community_id: 1 },
    { material_name: "Chafing dishes", filename: "1257.jpg", cost: "$60.00", availability: 1, category: "Events", description: "Tristique et egestas quis ipsum. Neque volutpat ac tincidunt vitae.", user_id: 35, community_id: 2 },
    { material_name: "Wine glasses", filename: "1258.jpg", cost: "$35.00", availability: 1, category: "Events", description: "Neque volutpat ac tincidunt vitae. Nunc sed blandit libero volutpat sed cras ornare.", user_id: 45, community_id: 3 },
    { material_name: "Picnic blanket", filename: "1259.jpg", cost: "$20.00", availability: 1, category: "Outdoor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", user_id: 44, community_id: 3 },
    { material_name: "Picnic blanket", filename: "1260.jpg", cost: "$40.00", availability: 1, category: "Outdoor", description: "Tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi.", user_id: 16, community_id: 1 },
    { material_name: "Picnic blanket", filename: "1261.jpg", cost: "$15.00", availability: 1, category: "Outdoor", description: "Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Sagittis purus sit amet volutpat. Leo a diam sollicitudin tempor id eu.", user_id: 15, community_id: 1 },
    { material_name: "Picnic basket", filename: "1262.jpg", cost: "$60.00", availability: 1, category: "Outdoor", description: "Amet consectetur adipiscing elit pellentesque habitant morbi. Ut placerat orci nulla pellentesque dignissim.", user_id: 1, community_id: 1 },
    { material_name: "Hurricane lamp", filename: "1263.jpg", cost: "$40.00", availability: 1, category: "Events", description: " Ut placerat orci nulla pellentesque dignissim. Arcu risus quis varius quam quisque id diam.", user_id: 2, community_id: 1 },
    { material_name: "Hurricane lamp", filename: "1264.jpg", cost: "$40.00", availability: 1, category: "Events", description: "Arcu risus quis varius quam quisque id diam. Id semper risus in hendrerit gravida rutrum quisque.", user_id: 3, community_id: 1 },
    { material_name: "Set of 16 vases", filename: "1265.jpg", cost: "$45.00", availability: 1, category: "Events", description: "Id semper risus in hendrerit gravida rutrum quisque. Neque viverra justo nec ultrices dui sapien eget.", user_id: 4, community_id: 1 },
    { material_name: "Dog crate", filename: "1266.jpg", cost: "$60.00", availability: 1, category: "Pets", description: "Neque viverra justo nec ultrices dui sapien eget. Dui sapien eget mi proin sed libero enim sed faucibus.", user_id: 43, community_id: 3 },
    { material_name: "Dog crate", filename: "1267.jpg", cost: "$50.00", availability: 1, category: "Pets", description: "Dui sapien eget mi proin sed libero enim sed faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique.", user_id: 5, community_id: 1 },
    { material_name: "Dog playpen", filename: "1268.jpg", cost: "$40.00", availability: 1, category: "Pets", description: "Diam phasellus vestibulum lorem sed risus ultricies tristique. Ornare massa eget egestas purus viverra accumsan in nisl.", user_id: 6, community_id: 1 },
    { material_name: "Stroller", filename: "1269.jpg", cost: "$80.00", availability: 1, category: "Kids", description: "Ornare massa eget egestas purus viverra accumsan in nisl. Phasellus vestibulum lorem sed risus.", user_id: 42, community_id: 3 },
    { material_name: "Stroller", filename: "1270.jpg", cost: "$60.00", availability: 1, category: "Kids", description: "Phasellus vestibulum lorem sed risus. Tristique et egestas quis ipsum.", user_id: 7, community_id: 1 },
    { material_name: "Stroller", filename: "1271.jpg", cost: "$150.00", availability: 1, category: "Kids", description: "Tristique et egestas quis ipsum. Neque volutpat ac tincidunt vitae.", user_id: 8, community_id: 1 },
    { material_name: "Car seat", filename: "1272.jpg", cost: "$60.00", availability: 1, category: "Kids", description: "Neque volutpat ac tincidunt vitae. Nunc sed blandit libero volutpat sed cras ornare.", user_id: 9, community_id: 1 },
    { material_name: "Booster seat", filename: "1273.jpg", cost: "$30.00", availability: 1, category: "Kids", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", user_id: 10, community_id: 1 },
    { material_name: "Easel", filename: "1274.jpg", cost: "$60.00", availability: 1, category: "Kids", description: "Tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi.", user_id: 41, community_id: 3 },
    { material_name: "Spongebob Squarepants cake pan", filename: "1275.jpg", cost: "$15.00", availability: 1, category: "Events", description: "Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Sagittis purus sit amet volutpat. Leo a diam sollicitudin tempor id eu.", user_id: 11, community_id: 1 },
    { material_name: "Super Mario Bros cake pan", filename: "1276.jpg", cost: "$15.00", availability: 1, category: "Events", description: "Amet consectetur adipiscing elit pellentesque habitant morbi. Ut placerat orci nulla pellentesque dignissim.", user_id: 12, community_id: 1 },
    { material_name: "Minnie Mouse cake pan", filename: "1277.jpg", cost: "$15.00", availability: 1, category: "Events", description: " Ut placerat orci nulla pellentesque dignissim. Arcu risus quis varius quam quisque id diam.", user_id: 13, community_id: 1 },
    { material_name: "Set of various cookie cutters", filename: "1278.jpg", cost: "$15.00", availability: 1, category: "Kids", description: "Arcu risus quis varius quam quisque id diam. Id semper risus in hendrerit gravida rutrum quisque.", user_id: 14, community_id: 1 },
    { material_name: "Set of 24 tea cups", filename: "1279.jpg", cost: "$200.00", availability: 1, category: "Events", description: "Id semper risus in hendrerit gravida rutrum quisque. Neque viverra justo nec ultrices dui sapien eget.", user_id: 20, community_id: 1 },
    { material_name: "Set of 10 serving platters", filename: "1280.jpg", cost: "$180.00", availability: 0, category: "Events", description: "Neque viverra justo nec ultrices dui sapien eget. Dui sapien eget mi proin sed libero enim sed faucibus.", user_id: 21, community_id: 2 },
    { material_name: "100 cup coffee urn", filename: "1281.jpg", cost: "$40.00", availability: 0, category: "Events", description: "Dui sapien eget mi proin sed libero enim sed faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique.", user_id: 22, community_id: 2 },
    { material_name: "Espresso machine", filename: "1282.jpg", cost: "$80.00", availability: 0, category: "Events", description: "Diam phasellus vestibulum lorem sed risus ultricies tristique. Ornare massa eget egestas purus viverra accumsan in nisl.", user_id: 19, community_id: 1 },
    { material_name: "Roller skates", filename: "1283.jpg", cost: "$30.00", availability: 0, category: "Kids", description: "Ornare massa eget egestas purus viverra accumsan in nisl. Phasellus vestibulum lorem sed risus.", user_id: 23, community_id: 2 },
    { material_name: "Cupcake carrier", filename: "1284.jpg", cost: "$20.00", availability: 0, category: "Events", description: "Phasellus vestibulum lorem sed risus. Tristique et egestas quis ipsum.", user_id: 18, community_id: 1 },
    { material_name: "Soda machine", filename: "1285.jpg", cost: "$80.00", availability: 0, category: "Events", description: "Tristique et egestas quis ipsum. Neque volutpat ac tincidunt vitae.", user_id: 17, community_id: 1 },
    { material_name: "Cutlery for 24", filename: "1286.jpg", cost: "$180.00", availability: 0, category: "Events", description: "Neque volutpat ac tincidunt vitae. Nunc sed blandit libero volutpat sed cras ornare.", user_id: 16, community_id: 1 },
    { material_name: "8 matching round tablecloths", filename: "1287.jpg", cost: "$80.00", availability: 0, category: "Events", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", user_id: 15, community_id: 1 },
    { material_name: "Lift", filename: "1288.jpg", cost: "$90.00", availability: 0, category: "Medical", description: "Tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi.", user_id: 40, community_id: 3 },
    { material_name: "Santa suit", filename: "1289.jpg", cost: "$100.00", availability: 0, category: "Events", description: "Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Sagittis purus sit amet volutpat. Leo a diam sollicitudin tempor id eu.", user_id: 24, community_id: 2 },
    { material_name: "Electric griddle", filename: "1290.jpg", cost: "$60.00", availability: 0, category: "Events", description: "Amet consectetur adipiscing elit pellentesque habitant morbi. Ut placerat orci nulla pellentesque dignissim.", user_id: 14, community_id: 1 },
    { material_name: "Magic set", filename: "1291.jpg", cost: "$80.00", availability: 0, category: "Kids", description: " Ut placerat orci nulla pellentesque dignissim. Arcu risus quis varius quam quisque id diam.", user_id: 13, community_id: 1 },
    { material_name: "Chemistry set", filename: "1292.jpg", cost: "$40.00", availability: 0, category: "Kids", description: "Arcu risus quis varius quam quisque id diam. Id semper risus in hendrerit gravida rutrum quisque.", user_id: 12, community_id: 1 },
    { material_name: "Friends lego set", filename: "1293.jpg", cost: "$80.00", availability: 0, category: "Kids", description: "Id semper risus in hendrerit gravida rutrum quisque. Neque viverra justo nec ultrices dui sapien eget.", user_id: 11, community_id: 1 },
    { material_name: "Ice skates", filename: "1294.jpg", cost: "$60.00", availability: 0, category: "Kids", description: "Neque viverra justo nec ultrices dui sapien eget. Dui sapien eget mi proin sed libero enim sed faucibus.", user_id: 10, community_id: 1 },
    { material_name: "Xbox game system", filename: "1295.jpg", cost: "$120.00", availability: 0, category: "Games", description: "Dui sapien eget mi proin sed libero enim sed faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique.", user_id: 9, community_id: 1 },
    { material_name: "Murder mystery game", filename: "1296.jpg", cost: "$40.00", availability: 0, category: "Games", description: "Diam phasellus vestibulum lorem sed risus ultricies tristique. Ornare massa eget egestas purus viverra accumsan in nisl.", user_id: 8, community_id: 1 },
    { material_name: "Projector", filename: "1297.jpg", cost: "$200.00", availability: 0, category: "Events", description: "Ornare massa eget egestas purus viverra accumsan in nisl. Phasellus vestibulum lorem sed risus.", user_id: 25, community_id: 2 },
    { material_name: "Inflatable projector screen", filename: "1298.jpg", cost: "$150.00", availability: 0, category: "Events", description: "Phasellus vestibulum lorem sed risus. Tristique et egestas quis ipsum.", user_id: 26, community_id: 2 },
    { material_name: "Bouncy castle", filename: "1299.jpg", cost: "$80.00", availability: 0, category: "Events", description: "Tristique et egestas quis ipsum. Neque volutpat ac tincidunt vitae.", user_id: 7, community_id: 1 },
    { material_name: "Jigsaw router", filename: "1300.jpg", cost: "$150.00", availability: 0, category: "Tools/Hardware", description: "Neque volutpat ac tincidunt vitae. Nunc sed blandit libero volutpat sed cras ornare.", user_id: 6, community_id: 1 },
    { material_name: "Portable patio heater", filename: "1301.jpg", cost: "$100.00", availability: 0, category: "Outdoor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", user_id: 5, community_id: 1 },
    { material_name: "Leaf blower", filename: "1302.jpg", cost: "$75.00", availability: 0, category: "Tools/Hardware", description: "Tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi.", user_id: 39, community_id: 3 },
    { material_name: "Air mattress", filename: "1303.jpg", cost: "$85.00", availability: 0, category: "Outdoor", description: "Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Sagittis purus sit amet volutpat. Leo a diam sollicitudin tempor id eu.", user_id: 27, community_id: 2 },
    { material_name: "Chocolate fountain", filename: "1304.jpg", cost: "$60.00", availability: 0, category: "Events", description: "Amet consectetur adipiscing elit pellentesque habitant morbi. Ut placerat orci nulla pellentesque dignissim.", user_id: 4, community_id: 1 },
    { material_name: "Kids’ electric ride-on car", filename: "1305.jpg", cost: "$250.00", availability: 0, category: "Kids", description: " Ut placerat orci nulla pellentesque dignissim. Arcu risus quis varius quam quisque id diam.", user_id: 3, community_id: 1 },
    { material_name: "Wagon", filename: "1306.jpg", cost: "$60.00", availability: 0, category: "Kids", description: "Arcu risus quis varius quam quisque id diam. Id semper risus in hendrerit gravida rutrum quisque.", user_id: 2, community_id: 1 },
    { material_name: "Wagon", filename: "1307.jpg", cost: "$90.00", availability: 0, category: "Events", description: "Id semper risus in hendrerit gravida rutrum quisque. Neque viverra justo nec ultrices dui sapien eget.", user_id: 38, community_id: 3 },
    { material_name: "Power generator", filename: "1308.jpg", cost: "$1000.00", availability: 0, category: "Tools/Hardware", description: "Neque viverra justo nec ultrices dui sapien eget. Dui sapien eget mi proin sed libero enim sed faucibus.", user_id: 28, community_id: 2 },
    { material_name: "Air compressor", filename: "1309.jpg", cost: "$250.00", availability: 0, category: "Tools/Hardware", description: "Dui sapien eget mi proin sed libero enim sed faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique.", user_id: 1, community_id: 1 },
    { material_name: "Large cooler", filename: "1310.jpg", cost: "$200.00", availability: 0, category: "Events", description: "Diam phasellus vestibulum lorem sed risus ultricies tristique. Ornare massa eget egestas purus viverra accumsan in nisl.", user_id: 29, community_id: 2 }
];

const seedMaterials = () => Material.bulkCreate(materialData);

module.exports = seedMaterials;