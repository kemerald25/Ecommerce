const express = require('express');
const authControllers = require("../Controllers/auth-controllers");
const router = express.Router();

router.route("/").get(authControllers.home)

router.route("/register").get(authControllers.register)

module.exports = router;