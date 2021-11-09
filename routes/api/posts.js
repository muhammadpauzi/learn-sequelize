const express = require('express');
const { Post, User, Like } = require('../../models');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({ include: [User, Like] });
        return res.status(200).json({ data: posts });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { user_id, content } = req.body;
        const newPost = await Post.create({ UserId: user_id, content });
        return res.status(201).json({ message: "CREATED", data: newPost });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const { user_id, content } = req.body;
        const post = await Post.findByPk(id, { include: [User, Like] });
        const updatedPost = await post.update({
            UserId: post.UserId,
            content: post.content == content ? post.content : content,
        });
        return res.status(201).json({ message: "UPDATED", data: updatedPost });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const post = await Post.findByPk(id, { include: [User, Like] });
        return res.status(200).json({ data: post });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await (await Post.findByPk(id)).destroy();
        return res.status(200).json({ message: "DELETED" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

module.exports = router;