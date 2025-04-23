const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
// Importar rutas
const productoRoutes = require('./routes/productoRoutes');
// Inicializar app
const app = express();
// Conectar a MongoDB


connectDB();
// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// Ruta base
app.get('/', (req, res) => {
res.json({
mensaje: 'API de Productos funcionando correctamente'
});
});
// Rutas de la API
app.use('/api/productos', productoRoutes);
// Manejo de rutas no encontradas
app.use((req, res) => {
res.status(404).json({
exitoso: false,
mensaje: 'Ruta no encontrada'
});
});
// Puerto
const PORT = process.env.PORT || 3000;
// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });