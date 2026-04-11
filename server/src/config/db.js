require('dotenv').config();
const { Sequelize } = require("sequelize");

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        logging: false
    }
)

async function TestConn(){
    try {
        await db.authenticate();
        console.log("[V] Connection has been established successfully.");
    } catch (error) {
        console.error("[X] Unable to connect to the database:", error);
    }
}

TestConn();

module.exports = db;