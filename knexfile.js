const pgConnection = process.env.DATABASE_URL || "postgres://wysavweowsmoak:94d5e61be589fd0e6f66c17eb62727874a4a593d6e3cc68150e739b75d55cc5c@ec2-34-200-106-49.compute-1.amazonaws.com:5432/d69ajj017np47e"

module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/halfwaythere.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
}
