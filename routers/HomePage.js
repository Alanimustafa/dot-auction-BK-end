// Requireing Express
const express = require ("express");

// Requiring Mongoose
const mongoose = require ('mongoose');

// Create the Vehicle constant
const Vehicle = require ("../models/VehicleSchema.js");

// Create the HomePage Router
const homePageRouter = express();

/// All HomePage Routes
homePageRouter.route("/")
.get(async (req, res) => {
    try {
         const vehicles = await Vehicle.find(); // Fetch all vehicles from MongoDB
         res.status(200).json(vehicles); // Send JSON response to frontend
        
    } catch (error) {
        res.status(500).json({ message: "Error retrieving data", error: error.message });
    }
});

// Route to get a specific vehicle by ID
homePageRouter.route("/details/:id")
  .get(async (req, res) => {
    try {
      const vehicle = await Vehicle.findById(req.params.id); // Fetch vehicle by ID
      if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving data", error: error.message });
    }
  });

module.exports = homePageRouter;