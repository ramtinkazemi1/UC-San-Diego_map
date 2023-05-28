const Sequelize = require('sequelize');
const sequelize = require('./database.js');

const Issue = sequelize.define('issue', {
  issueType: Sequelize.STRING,
  description: Sequelize.STRING,
  urgencyLevel: Sequelize.STRING,
  sendTo: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: false
});

module.exports = Issue;