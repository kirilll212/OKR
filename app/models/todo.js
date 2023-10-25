const Sequelize = require('sequelize')
const db = require('../util/database')

const Todo = db.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    todo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    }
})

module.exports = Todo