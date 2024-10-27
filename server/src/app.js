const express = require('express');
const cors = require('cors')
const app = express()

// Settings
app.set('Port', process.env.PORT)

// Middlewares
app.use(cors())
app.use(express.json())


// Routes
app.use('/api/vehicles', require('./routes/vehicles.js'))


module.exports = app;