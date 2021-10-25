const router = require('express').Router()
const Task = require('./model')

router.get('/', (req,res,next)=>{
    Task.getTasks()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(next)
})

router.post('/', (req,res,next)=>{
    const newTask = req.body
    Task.addTask(newTask)
    .then(task =>{
        res.status(201).json(task)
    })
    next()
})

//error handling router
router.use((err, req, res, next) =>{//eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})
module.exports = router;