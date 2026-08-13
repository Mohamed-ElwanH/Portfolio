const express = require('express');
const connectDB = require('./config/db.js');
const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

const aboutRoute = require('./routes/about.js');
const eduRoute = require('./routes/education.js');
const certRoute = require('./routes/certification.js');

const msgRoute = require('./routes/messages.js');
app.use('/api/about', aboutRoute);
app.use('/api/education', eduRoute);
app.use('/api/certification', certRoute);

app.use('/api/messages', msgRoute);
app.listen(PORT,_=>console.log(`Server started at port: ${PORT}`));