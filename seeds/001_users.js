exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Ken',
          last_name: 'Kotch',
          email: 'hello@ken.uno',
          sphere_id: null
        }, {
          id: 2,
          first_name: 'Max',
          last_name: 'Headroom',
          email: 'max@headroom.com',
          sphere_id: null
        }, {
          id: 3,
          first_name: 'George',
          last_name: 'Watson',
          email: 'goerge@getat.me',
          sphere_id: null,
          accountant: true
        }
      ])
    })
}
