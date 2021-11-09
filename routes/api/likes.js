const express = require('express');
const { Like } = require('../../models');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { post_id, user_id } = req.body;
        const like = await Like.findOne({ where: { user_id, PostId: post_id } });
        if (like) {
            return res.status(400).json({ message: 'Already liked' });
        } else {
            const newLike = await Like.create({ PostId: post_id, user_id });
            return res.status(201).json({ message: "CREATED/LIKED", data: newLike });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

module.exports = router;