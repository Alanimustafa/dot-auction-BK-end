// Requiring Express
const express = require("express");

// Create the Update Route
const updateRouter = express.Router();

// Requiring the mongoose model
const Vehicle = require("../models/VehicleSchema.js");

// Update vehicle details
updateRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedVehicle = await Vehicle.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedVehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        res.status(200).json(updatedVehicle);
    } catch (error) {
        console.error("Error updating vehicle:", error);
        res.status(500).json({ message: "Failed to update vehicle" });
    }
});

module.exports = updateRouter;

