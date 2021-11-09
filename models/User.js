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

User.sync().then(() => {
    console.log("User table created!");
})
// User.sync({ force: true }).then(() => {
//     console.log("User table created!");
// })

module.exports = User;