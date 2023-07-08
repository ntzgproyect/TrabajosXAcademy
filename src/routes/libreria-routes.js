const express = require('express');
const libreriaController = require('../controllers/libreria-controller');
const { isAuthenticated } = require('../middlewares/authentication');

const router = express.Router();

router.get("/obtener-todas", libreriaController.getAllLibrerias);
router.get("/obtener-por-id/:id", libreriaController.getLibraryById);
router.post("/crear", isAuthenticated, libreriaController.createLibreria);
router.put("/editar/:id", isAuthenticated, libreriaController.editLibreria);
router.delete("/eliminar/:id", isAuthenticated, libreriaController.deleteLibreria);

module.exports = router;