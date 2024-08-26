const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { email, pwd } = req.body;
    console.log('Received registration data:', req.body);

    // Simuler l'enregistrement d'un utilisateur
    if (!email || !pwd) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
