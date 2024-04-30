const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Register API routes
app.use('/api', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
