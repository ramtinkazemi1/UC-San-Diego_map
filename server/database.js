
const Sequelize = require('sequelize');

const sequelize = new Sequelize('issueReport', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
});
sequelize.sync();
module.exports = sequelize;
