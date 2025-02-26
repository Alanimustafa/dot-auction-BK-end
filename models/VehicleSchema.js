const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  condition: String,
  type: { type: String, required: true, default: "COMPACT" }, 
  year: { type: Number, required: true, default: 2025 }, 
  make: String,
  model: String,
  trim: String,
  color: String,
  price: Number,
  mileage: Number,
  fuelType: String,
  image_url: { type: String, default: "https://image.pngaaa.com/13/1887013-middle.png"},
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