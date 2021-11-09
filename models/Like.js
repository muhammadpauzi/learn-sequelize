const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Post = require('./Post');

const Like = sequelize.define('Like', { user_id: DataTypes.INTEGER }, { timestamps: true });

module.exports = Like;