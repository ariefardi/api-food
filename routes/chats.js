const express = require('express');
const router = express.Router();
const {getChats} = require('../controller/chat-controller')
/* GET home page. */
router.get('/', getChats);

module.exports = router;
