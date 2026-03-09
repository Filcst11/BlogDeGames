const Sequelize = require('sequelize');
const database = require('../db');



const Postagem = database.define('postagem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    imagemLink: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    texto: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    
});

module.exports = Postagem;