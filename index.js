const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el servidor
const app = express();

// Conectar a la DB 
conectarDB();

// Habilitar CORS
app.use(cors());

// Habilitar express.json
app.use(express.json({extended: true}));

// Puerto de la APP
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

// Arrancar la APP
app.listen(PORT, () => {
    console.log(`El servidor está funcionadno en el puerto: ${PORT}`);
})