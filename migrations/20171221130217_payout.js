exports.up = (knex, Promise) => {
  return knex.schema.createTable('payout', (table) => {
    table.increments()
    table.integer('user_id').notNullable()
    table.integer('money_paid').notNullable()
    table.integer('average_rating').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('payout')
}
