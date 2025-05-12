const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

// 🔧 Ruta base de la API (puede cambiarse por alumno)
const RUTA_API = '/abcd1234/api/entidades';
const DATA_FILE = path.join(__dirname, 'entidades.json');

app.use(express.static(path.join(__dirname, 'html')));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`📡 Conexión recibida: ${req.method} ${req.url}`);
    next();
});

function leerEntidades() {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            fs.writeFileSync(DATA_FILE, '[]', 'utf8');
        }
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error leyendo el archivo de entidades:", error);
        return [];
    }
}

function guardarEntidades(entidades) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(entidades, null, 2), 'utf8');
}

// GET [RUTA_API] → Todas las entidades
app.get(RUTA_API, (req, res) => {
    const entidades = leerEntidades();
    res.json(entidades);
});

// GET [RUTA_API]/:id → Una entidad por ID
app.get(`${RUTA_API}/:id`, (req, res) => {
    const entidades = leerEntidades();
    const entidad = entidades.find(e => e.id === req.params.id);
    if (entidad) {
        res.json(entidad);
    } else {
        res.status(404).json({ error: "Entidad no encontrada" });
    }
});

// POST [RUTA_API] → Crear nueva entidad
app.post(RUTA_API, (req, res) => {
    const { id, nombre } = req.body;

    if (!id || !Number.isInteger(Number(id)) || Number(id) < 1 || !nombre) {
        return res.status(400).json({
            error: "La entidad debe tener un 'id' numérico natural y un campo 'nombre'."
        });
    }

    const entidades = leerEntidades();
    if (entidades.find(e => e.id === String(id))) {
        return res.status(400).json({ error: "Ya existe una entidad con ese ID." });
    }

    entidades.push(req.body);
    guardarEntidades(entidades);
    res.status(201).json({ mensaje: "Entidad creada correctamente" });
});

// DELETE [RUTA_API]/:id → Eliminar entidad por ID
app.delete(`${RUTA_API}/:id`, (req, res) => {
    const entidades = leerEntidades();
    const nuevasEntidades = entidades.filter(e => e.id !== req.params.id);

    if (nuevasEntidades.length === entidades.length) {
        return res.status(404).json({ error: "Entidad no encontrada" });
    }

    guardarEntidades(nuevasEntidades);
    res.json({ mensaje: "Entidad eliminada correctamente" });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
