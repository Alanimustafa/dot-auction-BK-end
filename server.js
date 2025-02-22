// DEPENDENCIES REQUIREING
const express = require('express'); // Requiring Express
const app = express(); // Creating an instance of Express
const connectDB = require ("./config/db.js"); // importing the connectDB
const dotenv = require ("dotenv");

const cors = require('cors');

dotenv.config(); // running dotenv
connectDB(); // running the connection to the MongoDB

// method-override 
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(cors());

app.use(express.json()); // parses incoming JSON request bodies.
app.use(express.urlencoded({ extended: false })); // disabling extend the Body-Parser Middleware

// Importing Routes
const homePageRouter = require ('./routers/HomePage.js'); // Importing the HomePage router.
const newVehicleRouter = require ("./routers/NewVehiclePage.js") // Importing the newVehicle router
const vehicleUpdateRouter = require ("./routers/UpdateVehicle.js") // Importing the Vehicle Update Router

// Using the routes
app.use('/', homePageRouter); // Home Page router
app.use('/newvehicle', newVehicleRouter ); // New Vehicle Router
app.use('/update', vehicleUpdateRouter ); // Vehicle Update Router

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
