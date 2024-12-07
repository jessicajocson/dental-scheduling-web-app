const express = require("express");
const HomeController = require("../controllers/home.controller");

const router = express.Router();

router.get("/services", HomeController.getServices);

module.exports = router;
