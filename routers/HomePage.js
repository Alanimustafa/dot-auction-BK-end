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
         res.send(`
            <h1>Welcome to Back-Lot API</h1>
            <h1>Home Page</h1>
            <p>Manage your vehicles inventory efficiently.</p>
        `);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving data", error: error.message });
    }
});

module.exports = homePageRouter;