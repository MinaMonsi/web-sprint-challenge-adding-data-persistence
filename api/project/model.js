const db = require('../../data/dbConfig')

function getProjectById(project_id){
    return Promise.resolve(`Coding project Id ${project_id}`)
}


module.exports = {
    getProjectById
}