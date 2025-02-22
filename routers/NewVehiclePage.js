// Requiring Express
const express = require("express");

// Requiring Mongoose
const mongoose = require("mongoose");

// Requiring the mongoose model
const Vehicle = require("../models/VehicleSchema.js");

// Create the NewVehiclePage Router
const newVehicleRouter = express.Router();

// Route to handle adding a new vehicle
newVehicleRouter.route("/").post(async (req, res) => {
    try {
        const { condition, type, year, make, model, trim, color, price, mileage, fuelType, image_url, isAWD, is4X4, isElectrical, isHybrid, buyerName, sellerName, buy_date} = req.body;
        
        // Create a new vehicle instance
        const newVehicle = new Vehicle({
            condition,
            type,
            year,
            make,
            model,
            trim,
            color,
            price,
            mileage,
            fuelType,
            image_url,
            isAWD,
            is4X4,
            isElectrical,
            isHybrid,
            buyerName,
            sellerName,
            buy_date,
        });

        // Save the new vehicle to the database
        await newVehicle.save();
        res.status(201).json({ message: "Vehicle added successfully", vehicle: newVehicle });
    } catch (error) {
        res.status(500).json({ message: "Error adding vehicle", error: error.message });
    }
});

module.exports = newVehicleRouter;
