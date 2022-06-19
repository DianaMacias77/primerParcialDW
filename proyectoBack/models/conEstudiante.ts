"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var conEstudianteSchema = new Schema({
    nombre: String,
    apellido: String,
    email:String,
    telefono:Number,
    mensaje: String
});
module.exports = mongoose.model("conEstudiante", conEstudianteSchema);