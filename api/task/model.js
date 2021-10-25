const db = require('../../data/dbConfig')

function getTasks(){
    return db('task as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
}

function addTask(){
    return db('task').insert(task)
}

module.exports = {
    getTasks,
    addTask
}