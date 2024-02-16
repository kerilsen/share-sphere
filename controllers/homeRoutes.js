const router = require('express').Router();
const { User, Material, Community } = require('../models');
/* const withAuth = require('../utils/auth'); */

//commenting out the withAuth for now so we can work on the pages without getting redirected
router.get('/', /* withAuth, */ async (req, res) => {
    try {
      // Get all materials and JOIN with user data and community data
      const materialData = await Material.findAll({
        include: [ { model: User, attributes: ['name'], }, { model: Community, attributes: ['community_name'] } ],
      });
  
      // Serialize data so the template can read it
      const materials = materialData.map((material) => material.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        materials, 
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

router.get('/categories', /* withAuth, */ async (req, res) => {
    try {
      // Get all materials so we can pull the category names
      const materialData = await Material.findAll();
  
      const materials = materialData.map((material) => material.get({ plain: true }));
  
      res.render('categories', { 
        materials, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/profile', /* withAuth, */ async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await Material.findAll( { where: {user_id: req.session.user_id, include: [{ model: User, exclude: ['password'], attributes: ['material_name', 'description', 'cost', 'category']},]}});
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
});
  
module.exports = router;