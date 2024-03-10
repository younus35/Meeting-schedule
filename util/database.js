const Sequelize = require('sequelize');

const sequelize = new Sequelize('schedule-meeting', 'root', 'MDafnan18x',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;