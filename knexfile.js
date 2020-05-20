// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    version: '8.0',
    connection: {
      host : '127.0.0.1',
      user : 'newuser',
      password : 'password',
      database : 'test'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },
};
