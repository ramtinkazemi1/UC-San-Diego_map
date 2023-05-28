// issue.js
const Sequelize = require('sequelize');
const sequelize = require('./server/database.js');

const Issue = sequelize.define('issue', {
  issueType: Sequelize.STRING,
  description: Sequelize.STRING,
  urgencyLevel: Sequelize.STRING,
  sendTo: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

sequelize.sync()
  .then(() => console.log('Issues table has been successfully created, if one does not exist'))
  .catch(error => console.log('This error occurred', error));

module.exports = Issue;