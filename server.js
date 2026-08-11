const express = require('express');
const connectDB = require('./config/db.js');
const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

const aboutRoute = require('./routes/about.js');
app.use('/api/about', aboutRoute);

app.listen(PORT,_=>console.log(`Server started at port: ${PORT}`));