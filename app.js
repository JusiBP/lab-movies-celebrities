// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-movies-celebrities';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`; //app.locals es un objeto al que tienes acceso en toda la pp mientras dura la ejecución del programa.

// 👇 Start handling routes here
const index = require('./routes/index'); //requerimos las rutas de index en el archivo app.js
app.use('/', index); //Concatena la ruta usada en la app con la ruta en index.js

const celebritiesRoutes = require('./routes/celebrities.routes'); //requerimos las rutas de celebrities.routes en el archivo app.js
app.use('/celebrities', celebritiesRoutes); //Concatena la ruta usada en la app con la ruta en celebrities.routes.js

const Celebrity = require("./models/Celebrity.model.js"); //requerimos el modelo(schema) de celebrity en el archivo app.js

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app; //exportamos app para poder usar el codigo en server.js (archivo raiz donde corre[port listening there])
