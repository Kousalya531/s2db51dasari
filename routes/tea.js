var express = require('express');
const tea_controlers= require('../controllers/tea');
var router = express.Router();
/* GET tea */
router.get('/', tea_controlers.tea_view_all_Page );
module.exports = router;

/* GET detail costume page */
router.get('/detail', tea_controlers.tea_view_one_Page);

/* GET create costume page */
router.get('/create', tea_controlers.tea_create_Page);

/* GET create update page */
router.get('/update', tea_controlers.tea_update_Page);

/* GET delete costume page */
router.get('/delete', tea_controlers.tea_delete_Page);
