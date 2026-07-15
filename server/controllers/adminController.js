const User = require("../models/UserSchema");
const Car = require("../models/CarSchema");
const Booking = require("../models/MyBookingSchema");

// ===================
// Admin Login
// ===================
exports.adminLogin = async (req, res) => {
  console.log("Admin Login API Hit");
  console.log(req.body);

  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "admin123") {
    return res.status(200).json({
      success: true,
      message: "Admin Login Successful",
      admin: {
        name: "Admin",
        email: "admin@gmail.com",
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Email or Password",
  });
};

// ===================
// Dashboard
// ===================
exports.dashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCars = await Car.countDocuments();
    const totalBookings = await Booking.countDocuments();

    res.status(200).json({
      success: true,
      dashboard: {
        totalUsers,
        totalCars,
        totalBookings,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===================
// Get All Users
// ===================
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===================
// Get All Bookings
// ===================
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};