const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true,
      trim: true,
    },
    carNumber: {
      type: String,
      required: true,
      unique: true,
    },
    carType: {
      type: String,
      enum: ["Mini", "Sedan", "SUV"],
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    farePerKm: {
      type: Number,
      required: true,
    },
    driverName: {
      type: String,
      required: true,
    },
    driverPhone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Available", "Booked", "Offline"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);