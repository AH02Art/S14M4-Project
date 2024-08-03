// created the knex config as an object for different staging enviroments
const sharedConfig = {
    client: "sqlite3",
    migration: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" },
    useNullAsDefault: true,
    pool: { afterCreate: function(conn, done) { conn.run("PRAGMA foreign_keys = ON", done) }}
}

module.exports = {
    development: {
        ...sharedConfig,
        connection: { filename: "./data/cook_book.db3" },
    }
}