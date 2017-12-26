exports.seed = (knex, Promise) => {
  return knex('sphere').del()
    .then(() => {
      return knex('sphere').insert([
        { id: 1, sphere_name: 'SquiblieBop' },
        { id: 2, sphere_name: 'Cookr' },
        { id: 3, sphere_name: 'Yelp For Paychecks' }
      ])
    })
}
