const libreriaService = require('../services/libreria-service');

async function getAllLibrerias(req, res, next) {

    try {
    const librerias = await libreriaService.getAll();
    res.status(200).send(librerias);
    } catch(error) {
        next(error);
    }
};

async function getLibraryById(req, res, next) {

    const { id } = req.params;

    try {
    const libreria = await libreriaService.getById(id);
    res.status(200).send(libreria);
    } catch(error) {
        next(error);
    }
};

async function createLibreria(req, res, next) {

    const { name, location, telefono, contraseña } = req.body;

    try {
    const library = await libreriaService.createLibreria(name, location, telefono, contraseña);
    res.status(201).send(library);
    } catch(error) {
        next(error);
    }
};

async function editLibreria(req, res, next) {

    const { id } = req.params;
    const { name, location, telefono } = req.body;

    try {
    const library = await libreriaService.editLibreria(id, name, location, telefono);
    res.status(200).send(library);
    } catch(error) {
        next(error);
    }
};

async function deleteLibreria(req, res, next) {

    const { id } = req.params;

    try {
    const library = await libreriaService.deleteLibreria(id);
    res.status(200).send(library);
    } catch(error) {
        next(error);
    }
};

module.exports = { getAllLibrerias, getLibraryById, createLibreria, editLibreria, deleteLibreria };