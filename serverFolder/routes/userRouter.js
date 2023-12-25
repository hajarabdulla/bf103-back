const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();

router.get("/users", authController.GetUsers);
router.get("/users/:id", authController.GetUserById);
router.post("/users", authController.AddUser);

module.exports = router;
