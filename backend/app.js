const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const urlRoutes = require('./routes/url');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', urlRoutes);

sequelize.authenticate()
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error('DB Connection Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));