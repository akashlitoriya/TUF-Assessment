const express = require('express');

const router = express.Router();

const {createBanner, updateBanner, getBanners} = require('../controllers/Banner');

router.post('/createBanner', createBanner);
router.put('/updateBanner', updateBanner);
router.get('/getBanners', getBanners);

module.exports = router;