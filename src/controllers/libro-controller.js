const libroService = require('../services/libro-service');

async function getAllBooks(req, res, next) {

    try{
    const libros = await libroService.getAll();
    res.status(200).send(libros);
    } catch(error) {
        next(error);
    }
};

async function getBookById(req, res, next) {

    const { id } = req.params;

    try {
    const book = await libroService.getById(id);
    res.status(200).send(book);
    } catch(error) {
        next(error);
    }
};

async function createBook(req, res, next) {

    const { titulo, autor, year, library, LibreriumLibreriaId } = req.body;

    try {
        const book = await libroService.createBook(titulo, autor, year, library, LibreriumLibreriaId);
        res.status(201).send(book);
    } catch (error) {
        next(error);
    }
};

async function editBook(req, res, next) {

    const { id } = req.params;
    const { titulo, autor, year, library, LibreriumLibreriaId } = req.body;

    try {
    const book = await libroService.editBook(id, titulo, autor, year, library, LibreriumLibreriaId);
    res.status(200).send(book);
    } catch (error) {
        next(error);
    }
};

async function deleteBook(req, res, next) {

    const { id } = req.params;

    try {
    const book = await libroService.deleteBook(id);
    res.status(200).send(book);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllBooks, getBookById, editBook, deleteBook, createBook };