const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

// serve frontend
app.use(express.static(path.join(__dirname, '../public')));

// routes
const calculatorRoutes = require('./routes/calculator');
app.use('/api', calculatorRoutes);

app.listen(3000, () => console.log("Server running 🚀"));