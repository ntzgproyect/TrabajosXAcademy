const { Model, DataTypes } = require('sequelize');
const { dbInstance } = require('../db/sequelize-config');
const { Libro } = require('../models/libros');

class Libreria extends Model {}

Libreria.init ({
    libreria_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        defaultValue: 'activa',
        allowNull: false
    }    
},  {
        sequelize: dbInstance,
        modelName: 'Libreria',
        tableName: 'librerias',
        createdAt: false,
        updatedAt: false,
    });

    Libreria.hasMany(Libro);
    Libro.belongsTo(Libreria);

    module.exports = { Libreria }

