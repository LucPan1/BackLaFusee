const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3500;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true 
}));

app.use(express.json());
app.use(bodyParser.json());

// Routes
const registerRoute = require('./routes/register');
app.use('/register', registerRoute);

// Démarrer le server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
