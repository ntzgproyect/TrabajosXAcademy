const { Sequelize } = require('sequelize');

const dbInstance = new Sequelize({
    host: 'localhost',
    database: 'proyecto_node_js',
    username: 'root',
    password: 'root',
    dialect: 'mysql',
  });

  dbInstance.authenticate()
    .then(() =>{
      console.log("se conecto a la base de datos");
    })
    .catch( error => {
      console.log("NO se conecto a la base de datos");
    });

    module.exports = { dbInstance };