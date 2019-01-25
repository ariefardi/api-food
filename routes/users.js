const express = require('express');
const router = express.Router();
const {getUsers, getOneUsers, getUsersLocations, getOneUserLocations, getUserRole} = require('../controller/user-controller')
/* GET users listing. */
router.get('/', getUsers);
router.get('/:id', getOneUsers);

router.get('/location/all', getUsersLocations)
router.get('/location/user/:id', getOneUserLocations)

router.get('/role/:id', getUserRole)
module.exports = router;
