const express = require('express');
const { User } = require('../../models');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({ data: users });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, username, address, phone } = req.body;
        const newUser = await User.create(req.body, { fields: ['name', 'username', 'address', 'phone'] });
        return res.status(201).json({ message: "CREATED", data: newUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const { name, username, address, phone } = req.body;
        const user = await User.findByPk(id);
        const updatedUser = await user.update({
            name: user.name == name ? user.name : name,
            username: user.username == username ? user.username : username,
            address: user.address == address ? user.address : address,
            phone: user.phone == phone ? user.phone : phone,
        });
        return res.status(201).json({ message: "UPDATED", data: updatedUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({ data: user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await (await User.findByPk(id)).destroy();
        return res.status(200).json({ message: "DELETED" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error_code: error.code, message: error.message });
    }
});

module.exports = router;