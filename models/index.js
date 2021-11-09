const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');

Post.belongsTo(User);
Post.hasMany(Like);
Like.belongsTo(Post);

User.sync().then(() => {
    console.log("User table created!");
})
Post.sync().then(() => {
    console.log("Post table created!");
});
Like.sync().then(() => {
    console.log("Like table created!");
})

// User.sync({ force: true }).then(() => {
//     console.log("User table created!");
// });
// Like.sync({ force: true }).then(() => {
//     console.log("Like table created!");
// });
// Post.sync({ force: true }).then(() => {
//     console.log("Post table created!");
// })

module.exports = {
    User, Post, Like
}