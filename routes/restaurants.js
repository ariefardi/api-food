const express = require('express');
const router = express.Router();
const {getResto, getOneResto}  = require('../controller/restaurant-controller')
/* GET home page. */
router.get('/', getResto);

router.get('/:id', getOneResto);

module.exports = router;
