# 🚀 Servidor Web para la asignatura FTI con Node.js y Express  

Este proyecto es un servidor web básico desarrollado con **Node.js** y **Express**, diseñado para servir archivos estáticos desde el directorio `html/`.  

## 📌 Características  

- 📂 Sirve archivos solo desde `html/` y sus subdirectorios (`css/`, `js/`, `img/`).  
- 📡 Registra cada conexión en la consola.  
- 🚀 Fácil de ejecutar y configurar.  

## 📁 Estructura del Proyecto  

```
app/
│── index.js          # Archivo principal del servidor
│── package.json      # Configuración del proyecto
│── html/             # Carpeta pública
│   │── index.html    # Página principal
│   │── css/         # Hojas de estilo
│   │── js/          # Scripts
│   │── img/         # Imágenes
```

## 🛠️ Instalación  

1. **Clonar el repositorio**  
   ```sh
   mkdir app
   cd app
   git clone https://github.com/tuusuario/tu-repositorio.git
   ```

2. **Instalar dependencias**  
   ```sh
   npm install
   ```

3. **Ejecutar el servidor**  
   ```sh
   node index.js
   ```

4. **Configurar el puerto del servidor**  
    Deberás indicar el puerto en el que deseas que el servidor escuche las conexiones.  Editado el fichero `index.js` y modificando:  
    ```js
    const PORT = 3000;
    ```

    Y cambiar 3000 por el puerto HTTP que te hemos asignado.

## 🔧 Personalización  

Puedes agregar más archivos dentro de `html/` y sus subdirectorios (`css/`, `js/`, `img/`), y el servidor los servirá automáticamente.

## 📜 Licencia  

Este proyecto está bajo la licencia [MIT](LICENSE).  


