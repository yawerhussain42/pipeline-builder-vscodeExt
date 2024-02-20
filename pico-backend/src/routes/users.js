const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user");

router.post("/loginapi", userController.login);
router.post("/registerapi", userController.register);

module.exports = router;
