const dbConfig = require( "../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false
});
const db = {}

db.sequelize = sequelize;

db.stocks = require("./stock.model.js")(sequelize);
module.exports = db;