//  Creación del modelo Celebrity para que podamos gestionar la creación de documentos Celebrity:
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;