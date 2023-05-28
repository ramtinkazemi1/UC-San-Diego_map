
const Sequelize = require('sequelize');

const sequelize = new Sequelize('issueReport', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
