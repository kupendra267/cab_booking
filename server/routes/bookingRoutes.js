const express = require("express");
const router = express.Router();

const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
} = require("../controllers/bookingController");

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getAllBookings);

// Get Booking By ID
router.get("/:id", getBookingById);

// Update Booking
router.put("/:id", updateBookingStatus);

// Delete Booking
router.delete("/:id", deleteBooking);

module.exports = router;