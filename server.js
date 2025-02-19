// DEPENDENCIES REQUIREING

const express = require('express'); // Requiring Express
const app = express(); // Creating an instance of Express

const mongoose = require('mongoose'); // Requireing mongoose
require('dotenv').config(); // Requireing dotenv

// method-override 
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.use(express.urlencoded({ extended: false })); // disabling extend the Body-Parser Middleware

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Back-Lot API</h1>
        <p>Manage your vehicles inventory efficiently.</p>
    `);
});


// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

