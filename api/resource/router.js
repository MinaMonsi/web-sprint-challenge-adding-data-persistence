const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req,res,next)=>{
    Resource.getResourceById()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.post('/', (req,res,next)=>{
    const newResource = req.body
    Resource.addResource(newResource)
    .then(resource => {
        res.status(201).json(resource)
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