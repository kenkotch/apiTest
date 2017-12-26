exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.varchar('first_name').notNullable()
    table.varchar('last_name').notNullable()
    table.varchar('email').notNullable().unique()
    table.integer('sphere_id')
    table.boolean('accountant').defaultsTo(false)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('users')
}
