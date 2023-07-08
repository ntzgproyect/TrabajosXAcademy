const { Libro } = require("../models/libros");

async function getAll() {
    const listLibros = await Libro.findAll();

    if (listLibros == null) {
        throw new Error("Libros no encontrados");
    }

    return listLibros;
};

async function getById(id) {
    const libro = await Libro.findByPk(id);

    if (libro == null) {
        throw new Error("Libro no encontrado");
    }

    return libro;
};

async function createBook(titulo, autor, year, library, LibreriumLibreriaId) {

    if(!titulo) {
        throw new Error("Indique el titulo del libro.");
    }

    const book = new Libro();

    book.titulo = titulo;

    if(autor){
    book.autor = autor;
    }
    if(year){
    book.year = year;
    }
    if(library){
    book.LibreriumLibreriaId = library;
    }
    if(LibreriumLibreriaId){
    book.LibreriumLibreriaId = LibreriumLibreriaId;
    }

    const bookCreated = await book.save();
    return bookCreated;
};

async function editBook(id, titulo, autor, year, library, LibreriumLibreriaId) {

    const book = await getById(id);

    if(!book) {
        throw new Error("Indique un ID válido.");
    }

    if(titulo) {
        book.titulo = titulo;
    }

    if(autor) {
        book.autor = autor;
    }

    if(year) {
        book.year = year;
    }

    if(library) {
        book.LibreriumLibreriaId = library;
    }

    if(LibreriumLibreriaId) {
        book.LibreriumLibreriaId = LibreriumLibreriaId;
    }

    const bookEdited = await book.save();
    return bookEdited;
};

async function deleteBook(id) {

    const book = await getById(id);

    if(!book) {
        throw new Error("Indique un ID válido.");
    }

    book.estado = 'eliminado';

    const bookDeleted = await book.save();
    return bookDeleted;
};

module.exports = { getAll, getById, editBook, deleteBook, createBook };