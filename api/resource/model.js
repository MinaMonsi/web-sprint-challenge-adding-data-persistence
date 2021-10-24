const db = require('../../data/dbConfig')

function getResourceById(){
    return db('resource');
}

async function addResource(resource){
    await db('resource').insert(resource)
    .then(() => {
        return db('resource')
        .select('resource.resource_name')
        .first()
    })
}
module.export = {
    getResourceById,
    addResource
}