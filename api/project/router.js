const router = require('express').Router()
const Project = require('./model')

router.get('/', (req,res, next)=> {
    Project.getProjectById()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

router.post('/', (req,res,next)=>{
    const newProject = req.body
    Project.addProject(newProject)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
})

//error handling router
router.use((err, req, res, next) =>{//eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;