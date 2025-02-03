import 'dotenv/config';
import express from 'express';
import dbClient from './config/dbClient.js';
import routetasks from './routes/task.js';
import routeUsuarios from './routes/usuarios.js'

const app = express();
app.use(express.json());
app.use('/tasks', routetasks);
app.use('/users', routeUsuarios);


async function startServer() {
    try {
        await dbClient.conectarBaseDatos(); // Llama al método correcto
        console.log("🔌 Conexión establecida con la base de datos");

        const PORT = process.env.PORT || 3000;
        app.use('/tasks', routetasks);
        app.listen(PORT, () => console.log(`🚀 Servidor activo en el puerto ${PORT}`));

    } catch (e) {
        console.error("❌ Error al iniciar el servidor:", e);
    }
}

startServer();
