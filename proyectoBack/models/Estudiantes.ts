"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var EstudianteSchema = new Schema({
    correo: String,
    password: String,
    grado: String
});
module.exports = mongoose.model("Estudiante", EstudianteSchema);