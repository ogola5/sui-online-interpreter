//Define routes
const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
//Endpoint to compile Move code
router.post('/compile', controllers.compileMoveCode)

//Endpoint to execute Move code
router.post('/execute', controllers.executeMoveCode);

model.exports = router;
