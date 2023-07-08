const { Model, DataTypes } = require('sequelize');
const { dbInstance } = require('../db/sequelize-config');

class Libro extends Model {}

Libro.init ({
    libro_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    isbn: {
        type: DataTypes.INTEGER,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        defaultValue: 'anonimo'
    },
    year: {
        type: DataTypes.STRING,
        defaultValue: 'N/D'
    },
    estado: {
        type: DataTypes.STRING,
        defaultValue: 'activo',
        allowNull: false
    }
},  {
        sequelize: dbInstance,
        modelName: 'Libro',
        tableName: 'libros',
        createdAt: false,
        updatedAt: false
    });

    module.exports = { Libro }