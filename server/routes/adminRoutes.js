const express = require("express");
const router = express.Router();

const {
  adminLogin,
  dashboard,
  getUsers,
  getBookings,
} = require("../controllers/adminController");

// Admin Login
router.post("/login", adminLogin);

// Admin Dashboard
router.get("/dashboard", dashboard);

// Get All Users
router.get("/users", getUsers);

// Get All Bookings
router.get("/bookings", getBookings);

module.exports = router;