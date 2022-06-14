"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var MovieSchema = new Schema({
    name: String,
    releaseDate: String,
    revenue: Number,
    actor: String
});
module.exports = mongoose.model("Movie", MovieSchema);
