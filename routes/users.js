const express = require('express');
const router = express.Router();
const {getUsers, getOneUsers} = require('../controller/user-controller')
/* GET users listing. */
router.get('/', getUsers);
router.get('/:id', getOneUsers);

module.exports = router;
