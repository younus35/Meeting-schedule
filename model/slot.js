const Sequelize = require('sequelize')

const sequelize = require('../util/database');

const Slot = sequelize.define('slot',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    time: Sequelize.TIME,
    slotsAvailable: Sequelize.INTEGER
})

module.exports = Slot;