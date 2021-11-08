const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:database.sqlite3');

sequelize.sync({ logging: false });

module.exports = sequelize;