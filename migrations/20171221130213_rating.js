exports.up = (knex, Promise) => {
  return knex.schema.createTable('rating', (table) => {
    table.increments()
    table.varchar('user_id').notNullable()
    table.varchar('rated_id').notNullable()
    table.integer('rating').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('rating')
}
