var express = require('express');
var router = express.Router();
const mainController= require("../controller/mainController")

/* GET home page. */
router.get("/", mainController.index)
router.get("/password", mainController.password)

module.exports = router;
