const { Zipcode } = require('../models')
const zipcodeData = [
    // East Bay/Alamada County/Santa Clara County
    { zipcode: 94544, community_id: 1 },
    { zipcode: 94536, community_id: 1 },
    { zipcode: 94538, community_id: 1 },
    { zipcode: 94587, community_id: 1 },
    { zipcode: 94541, community_id: 1 },
    { zipcode: 94501, community_id: 1 },
    { zipcode: 94568, community_id: 1 },
    { zipcode: 94539, community_id: 1 },
    { zipcode: 94601, community_id: 1 },
    { zipcode: 94550, community_id: 1 },
    { zipcode: 94577, community_id: 1 },
    { zipcode: 94560, community_id: 1 },
    { zipcode: 94546, community_id: 1 },
    { zipcode: 94551, community_id: 1 },
    { zipcode: 94605, community_id: 1 },
    { zipcode: 94566, community_id: 1 },
    { zipcode: 94611, community_id: 1 },
    { zipcode: 94588, community_id: 1 },
    { zipcode: 94621, community_id: 1 },
    { zipcode: 94578, community_id: 1 },
    { zipcode: 94606, community_id: 1 },
    { zipcode: 94555, community_id: 1 },
    { zipcode: 94545, community_id: 1 },
    { zipcode: 94608, community_id: 1 },
    { zipcode: 94602, community_id: 1 },
    { zipcode: 94610, community_id: 1 },
    { zipcode: 94603, community_id: 1 },
    { zipcode: 94580, community_id: 1 },
    { zipcode: 94704, community_id: 1 },
    { zipcode: 94607, community_id: 1 },
    { zipcode: 94619, community_id: 1 },
    { zipcode: 94609, community_id: 1 },
    { zipcode: 95391, community_id: 1 },
    { zipcode: 94579, community_id: 1 },
    { zipcode: 94703, community_id: 1 },
    { zipcode: 94625, community_id: 1 },
    { zipcode: 94552, community_id: 1 },
    { zipcode: 94706, community_id: 1 },
    { zipcode: 94643, community_id: 1 },
    { zipcode: 94618, community_id: 1 },
    { zipcode: 94702, community_id: 1 },
    { zipcode: 94502, community_id: 1 },
    { zipcode: 94612, community_id: 1 },
    { zipcode: 94542, community_id: 1 },
    { zipcode: 94705, community_id: 1 },
    { zipcode: 94708, community_id: 1 },
    { zipcode: 94707, community_id: 1 },
    { zipcode: 94709, community_id: 1 },
    { zipcode: 94710, community_id: 1 },
    { zipcode: 94720, community_id: 1 },
    { zipcode: 94627, community_id: 1 },
    { zipcode: 94586, community_id: 1 },
    { zipcode: 94514, community_id: 1 },
    { zipcode: 95140, community_id: 1 },
    { zipcode: 94615, community_id: 1 },
    { zipcode: 94557, community_id: 1 },
    { zipcode: 94604, community_id: 1 },
    { zipcode: 94613, community_id: 1 },
    { zipcode: 94537, community_id: 1 },
    { zipcode: 94540, community_id: 1 },
    { zipcode: 94543, community_id: 1 },
    { zipcode: 94614, community_id: 1 },
    { zipcode: 94617, community_id: 1 },
    { zipcode: 94620, community_id: 1 },
    { zipcode: 94622, community_id: 1 },
    { zipcode: 94624, community_id: 1 },
    { zipcode: 94623, community_id: 1 },
    { zipcode: 94649, community_id: 1 },
    { zipcode: 94660, community_id: 1 },
    { zipcode: 94659, community_id: 1 },
    { zipcode: 94662, community_id: 1 },
    { zipcode: 94661, community_id: 1 },
    { zipcode: 94701, community_id: 1 },
    { zipcode: 94666, community_id: 1 },
    { zipcode: 94712, community_id: 1 },

    // Peninsula/San Mateo County zipcodes: 94002-94409
    { zipcode: 94002, community_id: 2 },
    { zipcode: 94003, community_id: 2 },
    { zipcode: 94005, community_id: 2 },
    { zipcode: 94010, community_id: 2 },
    { zipcode: 94011, community_id: 2 },
    { zipcode: 94012, community_id: 2 },
    { zipcode: 94014, community_id: 2 },
    { zipcode: 94015, community_id: 2 },
    { zipcode: 94016, community_id: 2 },
    { zipcode: 94017, community_id: 2 },
    { zipcode: 94018, community_id: 2 },
    { zipcode: 94019, community_id: 2 },
    { zipcode: 94020, community_id: 2 },
    { zipcode: 94021, community_id: 2 },
    { zipcode: 94025, community_id: 2 },
    { zipcode: 94026, community_id: 2 },
    { zipcode: 94027, community_id: 2 },
    { zipcode: 94028, community_id: 2 },
    { zipcode: 94029, community_id: 2 },
    { zipcode: 94030, community_id: 2 },
    { zipcode: 94031, community_id: 2 },
    { zipcode: 94037, community_id: 2 },
    { zipcode: 94038, community_id: 2 },
    { zipcode: 94044, community_id: 2 },
    { zipcode: 94045, community_id: 2 },
    { zipcode: 94059, community_id: 2 },
    { zipcode: 94060, community_id: 2 },
    { zipcode: 94061, community_id: 2 },
    { zipcode: 94062, community_id: 2 },
    { zipcode: 94062, community_id: 2 },
    { zipcode: 94062, community_id: 2 },
    { zipcode: 94063, community_id: 2 },
    { zipcode: 94064, community_id: 2 },
    { zipcode: 94065, community_id: 2 },
    { zipcode: 94066, community_id: 2 },
    { zipcode: 94067, community_id: 2 },
    { zipcode: 94070, community_id: 2 },
    { zipcode: 94071, community_id: 2 },
    { zipcode: 94074, community_id: 2 },
    { zipcode: 94080, community_id: 2 },
    { zipcode: 94083, community_id: 2 },
    { zipcode: 94096, community_id: 2 },
    { zipcode: 94098, community_id: 2 },
    { zipcode: 94099, community_id: 2 },
    { zipcode: 94128, community_id: 2 },
    { zipcode: 94128, community_id: 2 },
    { zipcode: 94307, community_id: 2 },
    { zipcode: 94308, community_id: 2 },
    { zipcode: 94401, community_id: 2 },
    { zipcode: 94402, community_id: 2 },
    { zipcode: 94403, community_id: 2 },
    { zipcode: 94404, community_id: 2 },
    { zipcode: 94405, community_id: 2 },
    { zipcode: 94406, community_id: 2 },
    { zipcode: 94407, community_id: 2 },
    { zipcode: 94408, community_id: 2 },
    { zipcode: 94409, community_id: 2 },

    // South Bay/Santa Clara County
    { zipcode: 95035, community_id: 3 },
    { zipcode: 95123, community_id: 3 },
    { zipcode: 95020, community_id: 3 },
    { zipcode: 95127, community_id: 3 },
    { zipcode: 95014, community_id: 3 },
    { zipcode: 95051, community_id: 3 },
    { zipcode: 95111, community_id: 3 },
    { zipcode: 94087, community_id: 3 },
    { zipcode: 95112, community_id: 3 },
    { zipcode: 95125, community_id: 3 },
    { zipcode: 95023, community_id: 3 },
    { zipcode: 95122, community_id: 3 },
    { zipcode: 95037, community_id: 3 },
    { zipcode: 94550, community_id: 3 },
    { zipcode: 95116, community_id: 3 },
    { zipcode: 95124, community_id: 3 },
    { zipcode: 95136, community_id: 3 },
    { zipcode: 94086, community_id: 3 },
    { zipcode: 95148, community_id: 3 },
    { zipcode: 95008, community_id: 3 },
    { zipcode: 94303, community_id: 3 },
    { zipcode: 95050, community_id: 3 },
    { zipcode: 95132, community_id: 3 },
    { zipcode: 95120, community_id: 3 },
    { zipcode: 95129, community_id: 3 },
    { zipcode: 94040, community_id: 3 },
    { zipcode: 95121, community_id: 3 },
    { zipcode: 95128, community_id: 3 },
    { zipcode: 95126, community_id: 3 },
    { zipcode: 95118, community_id: 3 },
    { zipcode: 95131, community_id: 3 },
    { zipcode: 95070, community_id: 3 },
    { zipcode: 94043, community_id: 3 },
    { zipcode: 95134, community_id: 3 },
    { zipcode: 95032, community_id: 3 },
    { zipcode: 95117, community_id: 3 },
    { zipcode: 95133, community_id: 3 },
    { zipcode: 94306, community_id: 3 },
    { zipcode: 94089, community_id: 3 },
    { zipcode: 95054, community_id: 3 },
    { zipcode: 94085, community_id: 3 },
    { zipcode: 94024, community_id: 3 },
    { zipcode: 95135, community_id: 3 },
    { zipcode: 95110, community_id: 3 },
    { zipcode: 95138, community_id: 3 },
    { zipcode: 94022, community_id: 3 },
    { zipcode: 94301, community_id: 3 },
    { zipcode: 94305, community_id: 3 },
    { zipcode: 94041, community_id: 3 },
    { zipcode: 95030, community_id: 3 },
    { zipcode: 95130, community_id: 3 },
    { zipcode: 94090, community_id: 3 },
    { zipcode: 95119, community_id: 3 },
    { zipcode: 95033, community_id: 3 },
    { zipcode: 95102, community_id: 3 },
    { zipcode: 94310, community_id: 3 },
    { zipcode: 95139, community_id: 3 },
    { zipcode: 95046, community_id: 3 },
    { zipcode: 95171, community_id: 3 },
    { zipcode: 94028, community_id: 3 },
    { zipcode: 95142, community_id: 3 },
    { zipcode: 95114, community_id: 3 },
    { zipcode: 95113, community_id: 3 },
    { zipcode: 94304, community_id: 3 },
    { zipcode: 94308, community_id: 3 },
    { zipcode: 95140, community_id: 3 },
    { zipcode: 94035, community_id: 3 },
    { zipcode: 95141, community_id: 3 },
    { zipcode: 95053, community_id: 3 },
    { zipcode: 95101, community_id: 3 },
    { zipcode: 95137, community_id: 3 },
    { zipcode: 95002, community_id: 3 },
    { zipcode: 95196, community_id: 3 },
    { zipcode: 94088, community_id: 3 },
    { zipcode: 94302, community_id: 3 },
    { zipcode: 94309, community_id: 3 },
    { zipcode: 94023, community_id: 3 },
    { zipcode: 94039, community_id: 3 },
    { zipcode: 94042, community_id: 3 },
    { zipcode: 95009, community_id: 3 },
    { zipcode: 95011, community_id: 3 },
    { zipcode: 95013, community_id: 3 },
    { zipcode: 95015, community_id: 3 },
    { zipcode: 95021, community_id: 3 },
    { zipcode: 95026, community_id: 3 },
    { zipcode: 95031, community_id: 3 },
    { zipcode: 95036, community_id: 3 },
    { zipcode: 95038, community_id: 3 },
    { zipcode: 95042, community_id: 3 },
    { zipcode: 95044, community_id: 3 },
    { zipcode: 95052, community_id: 3 },
    { zipcode: 95056, community_id: 3 },
    { zipcode: 95055, community_id: 3 },
    { zipcode: 95071, community_id: 3 },
    { zipcode: 95106, community_id: 3 },
    { zipcode: 95103, community_id: 3 },
    { zipcode: 95109, community_id: 3 },
    { zipcode: 95108, community_id: 3 },
    { zipcode: 95115, community_id: 3 },
    { zipcode: 95151, community_id: 3 },
    { zipcode: 95150, community_id: 3 },
    { zipcode: 95153, community_id: 3 },
    { zipcode: 95152, community_id: 3 },
    { zipcode: 95155, community_id: 3 },
    { zipcode: 95154, community_id: 3 },
    { zipcode: 95157, community_id: 3 },
    { zipcode: 95156, community_id: 3 },
    { zipcode: 95159, community_id: 3 },
    { zipcode: 95158, community_id: 3 },
    { zipcode: 95161, community_id: 3 },
    { zipcode: 95160, community_id: 3 },
    { zipcode: 95170, community_id: 3 },
    { zipcode: 95164, community_id: 3 },
    { zipcode: 95172, community_id: 3 },
    { zipcode: 95190, community_id: 3 },
    { zipcode: 95173, community_id: 3 },
    { zipcode: 95192, community_id: 3 },
    { zipcode: 95191, community_id: 3 },
    { zipcode: 95194, community_id: 3 },
    { zipcode: 95193, community_id: 3 },
];

const seedZipcode = () => Zipcode.bulkCreate(zipcodeData);

module.exports = seedZipcode;