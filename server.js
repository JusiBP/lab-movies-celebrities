const app = require("./app"); //require de todo el archivo app.js para su uso en server, que contiene la conexión al puerto.

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000; // Puerto será el especificado en .env. Si no hay ninguno usará el puerto 3000.
//Pocess es una variable global que corre en toda la app.

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
