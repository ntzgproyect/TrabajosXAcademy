const { User } = require("../models/users");
const jwt = require('jsonwebtoken');

async function login(name, password) {
    const user = await User.findOne({ 
        where: { 
            name: name,
            password: password
        } 
    });

    if (!user) {
        throw new Error("Nombre o Contraseña incorrectos");
    }
    
    const token = jwt.sign({
        id: user.id,
        name: user.name
    }, 'ClaveUltraSecreta');

    return {
        accessToken: token
    }
}

module.exports = { login }