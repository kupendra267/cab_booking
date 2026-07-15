const Car = require("../models/CarSchema");

// Add New Car
exports.addCar = async (req, res) => {
  try {
    const {
      carName,
      carNumber,
      carType,
      seats,
      farePerKm,
      driverName,
      driverPhone
    } = req.body;

    const car = new Car({
      carName,
      carNumber,
      carType,
      seats,
      farePerKm,
      driverName,
      driverPhone
    });

    await car.save();

    res.status(201).json({
      success: true,
      message: "Car Added Successfully",
      car
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get All Cars
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json({
      success: true,
      cars
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get Single Car
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car Not Found"
      });
    }

    res.status(200).json({
      success: true,
      car
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update Car
exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Car Updated Successfully",
      car
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete Car
exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Car Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};