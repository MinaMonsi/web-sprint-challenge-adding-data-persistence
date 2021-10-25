// build your server here and require it from index.js
const express = require ("express");
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express();
//This will display the current time in the status endpoint when called
const currentTime = new Date().toLocaleTimeString();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resource', resourceRouter);
server.use('/api/task', taskRouter);

server.get('/status', (req, res)=>{
    res.status(200).json({
        status: 200,
        message: `Server is up and running at ${currentTime}`,
    });
})


module.exports = server