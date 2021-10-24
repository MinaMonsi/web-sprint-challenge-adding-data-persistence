const db = require('../../data/dbConfig')

function getProjectById(){
    return db('projects');
}

async function addProject(project){
    await db('projects').insert(project)
}

module.exports = {
    getProjectById,
    addProject
}