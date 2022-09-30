const express = require('express');
const router = express.Router();
const register  = require('../controllers/AddingController')

router.route("/create").post(register);

module.exports = router;