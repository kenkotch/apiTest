exports.seed = (knex, Promise) => {
  return knex('rating').del()
    .then(() => {
      return knex('rating').insert([
        {
          id: 1,
          user_id: 1,
          rated_id: 2,
          rating: 7
        },
        {
          id: 2,
          user_id: 1,
          rated_id: 3,
          rating: 6
        },
        {
          id: 3,
          user_id: 1,
          rated_id: 4,
          rating: 5
        }
      ])
    })
}
