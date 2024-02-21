const router = require('express').Router();
const { User, Material, Community, Post, Comment } = require('../models');
/* const withAuth = require('../utils/auth'); */

//commenting out the withAuth for now so we can work on the pages without getting redirected
router.get('/', /* withAuth, */ async (req, res) => {
    try {
      res.render('homepage', {  
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/community', /* withAuth, */ async (req, res) => {
  try {
    // Get all materials and JOIN with user data and community data
    const communityData = await Community.findAll({
      include: [ { model: Material, attributes: ['material_name', 'cost', 'availability', 'description', 'user_id'], } ],
    });

    // Serialize data so the template can read it
    const communities = communityData.map((community) => community.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('community', { 
      communities, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/material/:id', /* withAuth, */ async (req, res) => {
    try {
      // Get material by ID, JOIN with user data and community data
      const materialData = await Material.findByPk(req.params.id, {
        include: [ { model: User, attributes: ['name', 'email'], }, { model: Community, attributes: ['community_name'] } ],
      });
  
      const materials = materialData.get({ plain: true });
  
      res.render('material', {
        materials,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/profile', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post, 
          include: {
          model: User,
          attributes: ["name"],
        }, }, 
        { model: Material, 
          include: {
          model: User,
          attributes: ["name"],
        }, }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/forum', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ['name', 'filename'], },],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('forum', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/forumpost/:id', /* withAuth, */ async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "name"],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_body', 'user_id', 'post_id', 'date_created'],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('forumpost', {
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/loginSignup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('loginSignup');
});
  
module.exports = router;