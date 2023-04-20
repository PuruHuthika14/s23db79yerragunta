var express = require('express');
    const icecream_controlers= require('../controllers/icecream');
    var router = express.Router();
    /* GET costumes */
    router.get('/', icecream_controlers.icecream_view_all_Page );

    /* GET detail costume page */
router.get('/detail', icecream_controlers.icecream_view_one_Page);
    module.exports = router;
/* GET create costume page */
router.get('/create', icecream_controlers.icecream_create_Page);
/* GET create update page */
router.get('/update', icecream_controlers.icecream_update_Page);
/* GET delete costume page */
router.get('/delete', icecream_controlers.icecream_delete_Page);
