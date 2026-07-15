const express = require("express");
const router = express.Router();

const {
  addCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/carController");

// Add a new car
router.post("/", addCar);

// Get all cars
router.get("/", getCars);

// Get a single car by ID
router.get("/:id", getCarById);

// Update car details
router.put("/:id", updateCar);

// Delete a car
router.delete("/:id", deleteCar);

module.exports = router;