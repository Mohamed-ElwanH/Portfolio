const express = require('express');
const connectDB = require('./config/db.js');
const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

const aboutRoute = require('./routes/about.js');
const eduRoute = require('./routes/education.js');
app.use('/api/about', aboutRoute);
app.use('/api/education', eduRoute);
app.listen(PORT,_=>console.log(`Server started at port: ${PORT}`));