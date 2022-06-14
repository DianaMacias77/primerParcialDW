"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProfSchema = new Schema({
    correo: String,
    password: String
});
module.exports = mongoose.model("Profesor", ProfSchema);
