const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const URL = sequelize.define('URL', {
    shortCode: { type: DataTypes.STRING, unique: true, allowNull: false },
    longUrl: { type: DataTypes.STRING, allowNull: false },
    clicks: { type: DataTypes.INTEGER, defaultValue: 0 }
});

sequelize.sync(); // Create table if not exists

module.exports = URL;
