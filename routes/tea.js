var express = require('express');
const tea_controlers= require('../controllers/tea');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET tea */
router.get('/', tea_controlers.tea_view_all_Page );


/* GET detail costume page */
router.get('/detail', tea_controlers.tea_view_one_Page);

/* GET create costume page */
router.get('/create', tea_controlers.tea_create_Page);

/* GET create update page */
router.get('/update',secured, tea_controlers.tea_update_Page);

/* GET delete costume page */
router.get('/delete', tea_controlers.tea_delete_Page);

module.exports = router;
