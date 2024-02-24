const router = require('express').Router();
const { Community } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newCommunity = await Community.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCommunity);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const communityData = await Community.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!communityData) {
      res.status(404).json({ message: 'No community found with this id!' });
      return;
    }

    res.status(200).json(communityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;