const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller.js");

router.get("/api/categories", controller.findAllCategories);
router.get("/api/productos/pagingfiltering", controller.pagingfilteringproducts);

module.exports = router;
