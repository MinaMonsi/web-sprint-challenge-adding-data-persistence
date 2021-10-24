// build your server here and require it from index.js
const express = require ("express");
const projectRouter = require('./project/router');
const server = express();

//This will display the current time in the test endpoint when called
const currentTime = new Date().toLocaleTimeString();


server.use(express.json());
server.use('/api/projects', projectRouter);


server.get('/status', (req, res)=>{
    res.status(200).json({
        status: 200,
        message: `Server is up and running at ${currentTime}`,
    });
})


module.exports = server