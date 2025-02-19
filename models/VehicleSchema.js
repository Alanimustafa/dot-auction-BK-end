const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  condition: {
    isNew: Boolean,
    isUsed: Boolean,
  },
  type: { type: String, required: true, default: "Vehicle" }, 
  year: { type: Number, required: true, default: 2025 }, 
  make: String,
  model: String,
  trim: String,
  color: String,
  mileage: Number,
  fuelType: String,
  image_url: String,
  isAWD: Boolean,
  is4X4: Boolean,
  isElectrical: Boolean,
  isHybrid: Boolean,
  buyerName: String,
  sellerName: String,
  buy_date: Date,
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema) 
module.exports = Vehicle;