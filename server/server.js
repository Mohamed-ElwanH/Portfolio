const express = require('express');
const connectDB = require('./config/db.js');
const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

const aboutRoute = require('./routes/about.js');
const eduRoute = require('./routes/education.js');
const certRoute = require('./routes/certification.js');
const projRoute = require('./routes/projects.js');
const msgRoute = require('./routes/messages.js');
const skillRoute = require('./routes/skills.js');

app.use('/api/about', aboutRoute);
app.use('/api/education', eduRoute);
app.use('/api/certifications', certRoute);
app.use('/api/projects', projRoute);
app.use('/api/messages', msgRoute);
app.use('/api/skills', skillRoute);

app.listen(PORT,_=>console.log(`Server started at port: ${PORT}`));