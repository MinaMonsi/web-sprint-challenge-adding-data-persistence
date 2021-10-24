
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
    table.increments('project_id') 
    table.string('project_name',200)
    .notNullable() //required
    .unique()
    table.text('project_description') //optional
    table.integer('project_completed')
    .notNullable()
    .defaultTo(0)
  })
  .createTable('resource', table => {
    table.increments('resource_id') //primary key
    table.string('resource_name',200)
    .notNullable()  //required&unique
    .unique()
    table.text('resource_description')  //optional
})
  .createTable('task', table => {
    table.increments('task_id') //primary key
    table.string('task_description')
    .notNullable() //required
    table.text('task_notes') //optional
    table.boolean('task_completed')
    .defaultTo(false) //defaults to false(integer 0)
    table.integer('project_id')
    .notNullable()//required
    .references('project_id')
    .inTable('projects')

})
  .createTable('project_resources', table => {
    table.increments('pro_res_id')
    table.integer('project_id')
    .notNullable()//required
    .references('project_id')
    .inTable('projects')
    table.integer('resource_id')
    .notNullable()//required
    .references('resource_id')
    .inTable('resource')
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('projects')
};
