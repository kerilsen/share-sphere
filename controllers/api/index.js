const router = require('express').Router();
const userRoutes = require('./userRoutes');
const materialRoutes = require('./materialRoutes');
const communityRoutes = require('./communityRoutes');

router.use('/users', userRoutes);
router.use('/materials', materialRoutes);
router.use('/communities', communityRoutes);

module.exports = router;