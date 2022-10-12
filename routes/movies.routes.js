const router = require("express").Router();
//require uso de express en el archivo, concretamente de su funcionalidad .router.
//Router = enrutador. Las rutas que creemos podrán utilizar el esquema de rutas generado en este archivo, simplificando así mucho la aplicación.

const Movie = require("../models/Movie.model.js"); //requerimos el uso del modelo Movie en el archivo.
const Celebrity = require("../models/Celebrity.model.js"); //requerimos el uso del modelo Celebrity en el archivo.

router.get("/create", (req, res, next) => {  //GET crear movie
    Celebrity.find()
    .then (result => {
        data = {celebrity: result}
        res.render("movies.views/new-movie", data); //renderizado de la view new-movie (contiene el form para crear documento en db)
    })
    
  });

router.post("/create", (req, res, next)=>{
    Movie.create(req.body)
    .then(result => {
        console.log("result: ", result);
        const data = {
            movie: result
        }
        res.redirect("/movies"); //redirect reRutea (requiere ruta), y accedes a la coincidencia, en este caso a router.get("/movies")
    })
    .catch(err => {
        console.log("error: ", err);
        const data = {}
        res.render("movies.views/new-movie", data);
    })
  })

  router.get("/", (req, res, next) => {  //GET crear movie
    Movie.find()
    .then (result => {
        const data = {movie: result}
        console.log(data)
        res.render("movies.views/movies", data); //renderizado de la view new-movie (contiene el form para crear documento en db)
    })
    .catch(err => {
        console.log("error: ", err);
        // res.render("movies.views/new-movie", data);
    })
    
  });

  router.get("/:idMovie", (req, res, next) => {  //GET movie por id y renderizar vista movie-details con los datos de la pelicula seleccionada.
    Movie.findById(req.params.idMovie)
    .populate("cast") //Puesto que cast es una id que conecta con el model celebrity, populate nos hace un incrustado de los datos para que podamos disponer de ellos. OJO, en este caso devuelve un array, de ahí el forEach en el hbs.
    .then (result => {
        const data = {movie: result}
        res.render("movies.views/movie-details", data); //renderizado de la view movie-details (pasamos data de la movie para rellenar la pagina)
    })
    .catch(err => {
        console.log("error: ", err);
    }) 
  });

  router.post("/:idMovie/delete", (req, res, next) => {  //GET movie por id y proseguir a eliminar de la db
    console.log(req.params.idMovie)
    Movie.findByIdAndRemove(req.params.idMovie) //Delete de la db
    .then (result => {
        console.log ("result ", result)
        res.redirect("/movies"); //renderizado de la view movie-details (pasamos data de la movie para rellenar la pagina)
    })
    .catch(err => {
        console.log("error: ", err);
    }) 
  });

  


  module.exports = router; //exportar la funcionalidad router. Deberemos hacer requiere de la misma donde nos interese hacer uso de ella. En este caso, desde app.js.

  