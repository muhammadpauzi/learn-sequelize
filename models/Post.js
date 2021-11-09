const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

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

Post.belongsTo(User);

Post.sync().then(() => {
    console.log("Post table created!");
})
// Post.sync({ force: true }).then(() => {
//     console.log("Post table created!");
// })

module.exports = Post;