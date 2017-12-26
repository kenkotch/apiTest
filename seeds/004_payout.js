exports.seed = (knex, Promise) => {
  return knex('payout').del()
    .then(() => {
      return knex('payout').insert([
        {
          id: 1,
          user_id: 1,
          average_rating: 6,
          money_paid: 70000
        },
        {
          id: 2,
          user_id: 2,
          average_rating: 6,
          money_paid: 70000
        },
        {
          id: 3,
          user_id: 3,
          average_rating: 6,
          money_paid: 70000
        }
      ])
    })
}
