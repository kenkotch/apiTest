exports.up = (knex, Promise) => {
  return knex.schema.createTable('sphere', (table) => {
    table.increments()
    table.varchar('sphere_name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('sphere')
}
