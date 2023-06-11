import { Sequelize } from "sequelize";

const db = new Sequelize('kost_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;