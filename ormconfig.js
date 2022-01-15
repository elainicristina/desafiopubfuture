"use strict";

module.exports = {
    type: "mysql",
    host: process.env.DB_HOST || "0.0.0.0",
    port: parseInt(process.env.DB_PORT) || 3306,
    database: process.env.DB_NAME || "gerenciadorFinancas",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    synchronize: true,
    logging: false,
    entities: [
        __dirname + "/build/models/**/*.js"
    ],
    migrations: [
        __dirname + "/src/migrations/**/*.ts"
    ],
    subscribers: [
        __dirname + "/src/subscribers/**/*.ts"
    ],
    cli: {
        "entitiesDir": __dirname + "/src/models",
        "migrationsDir": __dirname + "/src/migrations",
        "subscribersDir": __dirname + "/src/subscribers"
    }
};