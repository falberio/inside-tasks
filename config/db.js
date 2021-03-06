const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Conectado a la DB');
    } catch (error) {
        console.log(error);
        process.exit(1); // Detener la aplicación
    }
}



module.exports = conectarDB;