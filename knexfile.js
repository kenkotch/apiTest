'use strict'

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/lile_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/lile_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
