//  Creación del modelo Celebrity para que podamos gestionar la creación de documentos Celebrity:
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({ //modelo para Movies
    title: String,
    genre: String,
    plot: String,
    cast: [{type: Schema.Types.ObjectId, ref: "Celebrity"}] //Array de objetos que son IDs, referenciados al modelo de celebrities.
})

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;