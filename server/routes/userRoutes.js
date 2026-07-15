const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Get All Users
router.get("/", getAllUsers);

router.put("/:id", updateUser);

module.exports = router;