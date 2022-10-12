const router = require("express").Router();  
//require uso de express en el archivo, concretamente de su funcionalidad .router.
//Router = enrutador. Las rutas que creemos podrán utilizar el esquema de rutas generado en este archivo, simplificando así mucho la aplicación.

/* GET home page */
router.get("/", (req, res, next) => {  //GET para renderizado de página home/index.
  res.render("index");
});

module.exports = router; //exportar la funcionalidad router. Deberemos hacer requiere de la misma donde nos interese hacer uso de ella.
