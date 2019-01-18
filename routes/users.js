const express = require('express');
const router = express.Router();
const {getUsers, getOneUsers, getUsersLocations, getOneUserLocations} = require('../controller/user-controller')
/* GET users listing. */
router.get('/', getUsers);
router.get('/:id', getOneUsers);

router.get('/location/all', getUsersLocations)
router.get('/location/user/:id', getOneUserLocations)
module.exports = router;
