// build your server here and require it from index.js
const express = require ("express");
const server = express();



server.use(express.json());

const currentTime = new Date().toLocaleTimeString();

server.get('/status', (req, res)=>{
    res.status(200).json({
        status: 200,
        message: `Server is up and running at ${currentTime}`,
    });
})


module.exports = server