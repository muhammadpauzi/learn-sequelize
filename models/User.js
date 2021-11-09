const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true
    },
    address: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(128),
    }
}, { timestamps: true });

module.exports = User;