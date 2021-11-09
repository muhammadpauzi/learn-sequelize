const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const Like = require('./Like');

const Post = sequelize.define('Post', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    like: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, { timestamps: true });

module.exports = Post;