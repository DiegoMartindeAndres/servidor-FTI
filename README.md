# 🚀 Servidor Web para la asignatura FTI con Node.js y Express  

Este proyecto es un servidor web básico desarrollado con **Node.js** y **Express**, diseñado para servir archivos estáticos desde el directorio `html/`.  

## 📌 Características  

- 📂 Sirve archivos solo desde `html/` y sus subdirectorios (`css/`, `js/`, `img/`).  
- 📡 Registra cada conexión en la consola.  
- 🚀 Fácil de ejecutar y configurar.  


## 🛠️ Instalación  

1. **Clonar el repositorio**  
   ```sh
   git clone https://github.com/DiegoMartindeAndres/servidor-FTI
   ```

2. **Acceder al directorio**  
   ```sh
   cd servidor-FTI/
   ```

3. **Instalar dependencias**  
   ```sh
   npm install
   ```

4. **Ejecutar el servidor**  
   ```sh
   node index.js
   ```

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

## 🌐 Acceso al Servidor

El servidor estará disponible en `http://virtual.infor.uva.es:PUERTO_HTTP/`.

No olvides cmabiar:

- **PUERTO_HTTP** por el puerto que te hemos asignado.

## 🔧 Personalización  

Puedes agregar más archivos dentro de `html/` y sus subdirectorios (`css/`, `js/`, `img/`), y el servidor los servirá automáticamente.

## 🤖 Añade archivos al servidor usando GitHub Actions

Puedes añadir archivos al servidor usando GitHub Actions. 

Para ello, sigue estos pasos:

1. **Añade el archivo deploy.yml en el directorio `.github/workflows/`**
2. **Edita el archivo deploy.yml** y cambia en la variable `PRACTICA: practica1` el número de la práctica que estás haciendo.
3. En la configuración de la GitHub Action, añade las variables de entorno necesarias para conectarte al servidor. Estas variables son:
   - `SSH_HOST`: La dirección IP o nombre de host del servidor
      -  `virtual.infor.uva.es`.
   - `SSH_USER`: El nombre de usuario para conectarte al servidor.
      - `usuario`
   - `SSH_PORT`: El puerto SSH del servidor.
      - _El servidor que tengas asignado._
4. **Generar la clave SSH** para autenticarte en el servidor.Puedes hacerlo con los siguientes comandos:
   - 🍏 (MacOS): 
   ```sh
   ssh-keygen -t rsa -b 4096 -C "fti-server" -f ~/.ssh/fti-server
   ```
   - 🐧 (Linux): 
   ```sh
   ssh-keygen -t rsa -b 4096 -C "fti-server" -f ~/.ssh/fti-server
   ```
   - 🪟 (Windows): 
   ```sh
   ssh-keygen -t rsa -b 4096 -C "fti-server" -f %USERPROFILE%\.ssh\fti-server
   ```
5. **Añadir la clave pública al servidor** para ello ejecuta este comando.
   - 🍏 (MacOS): 
   ```sh
   ssh-copy-id -i ~/.ssh/fti-server.pub -p PUERTO_SSH usuario@virtual.infor.uva.es
   ```
   - 🐧 (Linux): 
   ```sh
   ssh-copy-id -i ~/.ssh/fti-server.pub -p PUERTO_SSH usuario@virtual.infor.uva.es
   ```

5.1 **🪟 (Windows) Si no tienes el comando ssh-copy-id** puedes usar el siguiente comando para copiar la clave pública al servidor:
   - 5.1.1: Abre el archivo `fti-server.pub` con un editor de texto y copia su contenido.

   - 5.1.2: Conéctate al servidor usando el siguiente comando:
      ```sh
      ssh -p PUERTO_SSH usuario@virtual.infor.uva.es
      ```
   - 5.1.3: Una vez conectado, abre el archivo `~/.ssh/authorized_keys` con un editor de texto y pega el contenido de la clave pública al final del archivo.
      - Puedes usar el siguiente comando para abrir el archivo:
      ```sh
      nano ~/.ssh/authorized_keys
      ```
   - 5.1.4: Guarda y cierra el archivo.
   
6. **Añadir la clave privada al GitHub Action**. Para ello, ve a la configuración del repositorio y añade una nueva variable de entorno llamada `SSH_PRIVATE_KEY` con el contenido de la clave privada `fti-server`.
  
7. **Subir los cambios al repositorio**. Una vez que hayas añadido la clave privada al GitHub Action, sube los cambios al repositorio y el GitHub Action se ejecutará automáticamente.



## 📜 Licencia  

Este proyecto está bajo la licencia [MIT](LICENSE).  


