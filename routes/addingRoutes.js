const express = require('express');
const router = express.Router();
const { register, getData } = require('../controllers/AddingController')

router.route("/create").post(register);
router.route("/get").get(getData);

module.exports = router;