// seperating whole api routings in this file 

const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index.controller')

router.use('/', indexController)

module.exports = router;