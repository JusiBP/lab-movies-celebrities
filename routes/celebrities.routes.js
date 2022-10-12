const router = require("express").Router();
//require uso de express en el archivo, concretamente de su funcionalidad .router.
//Router = enrutador. Las rutas que creemos podrán utilizar el esquema de rutas generado en este archivo, simplificando así mucho la aplicación.

const Celebrity = require("../models/Celebrity.model"); //requerimos el uso del modelo Celebrity en el archivo.

router.get("/create", (req, res, next) => {  //GET crear celebrity
    res.render("celebrities.views/new-celebrity"); //renderizado de la view new-celebrity (contiene el form para crear documento en db)
  });

router.post("/create", (req, res, next)=>{
    Celebrity.create(req.body)
    .then(result => {
        console.log("result: ", result);
        const data = {
            celebrity: result
        }
        res.redirect("/celebrities"); //redirect reRutea (requiere ruta), y accedes a la coincidencia, en este caso a router.get("/celebrities")
    })
    .catch(err => {
        console.log("error: ", err);
        const data = {
        }
        res.render("celebrities.views/new-celebrity", data);
    })
  })

  router.get("/", (req, res, next) => {  //GET crear celebrity
    Celebrity.find()
    .then (result => {
        console.log ("result ", result)
        const data = {celebrity: result}
        console.log(data)
        res.render("celebrities.views/celebrities", data); //renderizado de la view new-celebrity (contiene el form para crear documento en db)
    })
    .catch(err => {
        console.log("error: ", err);
        // res.render("celebrities.views/new-celebrity", data);
    })
    
  });

  module.exports = router; //exportar la funcionalidad router. Deberemos hacer requiere de la misma donde nos interese hacer uso de ella. En este caso, desde app.js.

  