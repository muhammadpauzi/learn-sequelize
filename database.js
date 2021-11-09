const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:database.sqlite3');

module.exports = sequelize;