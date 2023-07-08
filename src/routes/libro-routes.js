const express = require('express');
const libroController = require('../controllers/libro-controller');
const { isAuthenticated } = require('../middlewares/authentication');

const router = express.Router();

router.get("/obtener-todos", libroController.getAllBooks);
router.get("/obtener-por-id/:id", libroController.getBookById);
router.post("/crear", isAuthenticated, libroController.createBook);
router.put("/editar/:id", isAuthenticated, libroController.editBook);
router.delete("/eliminar/:id", isAuthenticated, libroController.deleteBook);

module.exports = router;