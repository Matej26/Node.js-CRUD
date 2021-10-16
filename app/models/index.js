const Sequelize = require("sequelize");
const sequelize = new Sequelize.Sequelize('films', 'postgres', null, {
    dialect: 'postgres',
    host: 'localhost'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.films = require("./film.js")(sequelize, Sequelize);

module.exports = db;