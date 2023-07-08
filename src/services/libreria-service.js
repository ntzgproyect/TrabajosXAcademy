const { Libreria } = require("../models/librerias");
const { Libro } = require("../models/libros");

async function getAll() {

    const listLibrerias = await Libreria.findAll({ include: [Libro] });

    if (listLibrerias == null) {
        throw new Error("Librerias no encontradas");
    }

    return listLibrerias;
};

async function getById(id) {
   
        const library = await Libreria.findOne({ where: { libreria_id: id }, include: [Libro] });

        if (library == null) {
            throw new Error("Libreria no encontrada");
        }

        return library;
};

async function createLibreria(name, location, telefono) {

    if(!name) {
        throw new Error("Indique el nombre de la libreria.");
    }

    if(!location) {
        throw new Error("Indique la direccion de la libreria.");
    }

    if(!telefono) {
        throw new Error("Indique el telefono de la libreria.");
    }

    const library = new Libreria();

    library.name = name;
    library.location = location;
    library.telefono = telefono;

    const libraryCreated = await library.save();
    return libraryCreated;
};

async function editLibreria(id, name, location, telefono) {

    const library = await getById(id);

    if(name) {
        library.name = name;
    }

    if(location) {
        library.location = location;
    }

    if(telefono) {
        library.telefono = telefono;
    }

    const libraryEdited = await library.save();
    return libraryEdited;
};

async function deleteLibreria(id) {

    const library = await getById(id);

    library.estado = 'eliminada';

    const libraryDeleted = await library.save();
    return libraryDeleted;
};

module.exports = { getAll, getById, createLibreria, editLibreria, deleteLibreria };