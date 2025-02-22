// Requiring Express
const express = require("express");

// Create the Update Route
const deleteVehicleRouter = express.Router();

// Requiring the mongoose model
const Vehicle = require("../models/VehicleSchema.js");

// Update vehicle details
deleteVehicleRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedVehicle = await Vehicle.findByIdAndDelete(id, req.body, { new: true, runValidators: true });

        if (!deletedVehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        res.status(200).json(deletedVehicle);
    } catch (error) {
        console.error("Error updating vehicle:", error);
        res.status(500).json({ message: "Failed to update vehicle" });
    }
});

module.exports = deleteVehicleRouter;

