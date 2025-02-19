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
  mileage: Number,
  isAWD: Boolean,
  is4X4: Boolean,
  isElectrical: Boolean,
  isHybrid: Boolean,
  inStock: Boolean,
  buyer: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  seller: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  buy_date: Date,
  sell_date: Date,
});

module.exports = mongoose.model("Vehicle", vehicleSchema);