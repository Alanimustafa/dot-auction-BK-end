// DEPENDENCIES REQUIREING

const express = require('express'); // Requiring Express
const app = express(); // Creating an instance of Express
const connectDB = require ("./config/db.js"); // importing the connectDB
const dotenv = require ("dotenv");

// const mongoose = require('mongoose'); // Requireing mongoose
// require('dotenv').config(); // Requireing dotenv

dotenv.config(); // running dotenv
connectDB(); // running the connection to the MongoDB

// method-override 
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.json()); // parses incoming JSON request bodies.

app.use(express.urlencoded({ extended: false })); // disabling extend the Body-Parser Middleware


// Importing Routes
const homePageRouter = require ('./routers/HomePage.js'); // Importing the HomePage router.

const newVehicleRouter = require ("./routers/NewVehiclePage.js") // Importing the newVehicle router


// using the routes
app.use('/', homePageRouter); // App using the Hoem Page router
app.use('/newvehicle', newVehicleRouter ); // App using the New Vehicle Router.


// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

