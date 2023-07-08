const express = require('express');
const { dbInstance } = require('./src/db/sequelize-config');
const userRoutes = require('./src/routes/user-routes');
const libreriaRoutes = require('./src/routes/libreria-routes');
const libroRoutes = require('./src/routes/libro-routes');

const { initializeAuthentication } = require('./src/auth/auth');
const { errorHandlerMiddleware } = require('./src/middlewares/error-handler');

const app = express();
const port = 3000;

dbInstance.sync({ alter: true });

initializeAuthentication();

app.use(express.json());
app.use('/user', userRoutes);
app.use('/library', libreriaRoutes);
app.use('/book', libroRoutes);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log("API con express corriendo en el puerto " + port);
});