const router = require('express').Router();
const { Community } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
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

router.get('/:id', async (req, res) => {
    // find a single community by its `id`
    try {
      const communityData = await Community.findByPk(req.params.id, {
        include: [{ model: User }]
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

router.put('/:id', async (req, res) => {
    // updates a community by id
    try {
      const communityData = await Community.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (!communityData[0]) {
        res.status(404).json({ message: 'No community with this id!' });
        return;
      }
      res.status(200).json(communityData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
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