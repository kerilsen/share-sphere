const router = require('express').Router();
const userRoutes = require('./userRoutes');
const materialRoutes = require('./materialRoutes');
const communityRoutes = require('./communityRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/materials', materialRoutes);
router.use('/communities', communityRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;