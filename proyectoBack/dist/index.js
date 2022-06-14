"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_validator_1 = require("express-validator");
dotenv_1.default.config();
const port = process.env.PORT;
var bodyParser = require("body-parser");
var app = (0, express_1.default)();
var morgan = require("morgan");
const cors = require("cors"); //importar cors para su uso
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.options("*", cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express_1.default.json());
var router = express_1.default.Router();
var mongoose = require("mongoose");
var uri = "mongodb+srv://mongouser:password1234@cluster0.xagno.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "error de conexion"));
db.once("openUri", function () {
    console.log("Me conecte a mongodb");
});
app.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
});
app.get('/movie', function (req, res) {
    res.json([
        { title: "Rocky", actor: "Sylvester Stalone" },
        { title: "Harry Potter", actor: "Daneil Radclife" },
    ]);
});
app.get('/movie', function (req, res) {
    res.status(500).send({ error: "Falla en el ssitema" });
});
app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
});
router.route("/alumnos")
    .post(function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var nombre = req.body.nombre;
        res.status(200).json({
            mensaje: nombre
        });
    });
});
var Movie = require("./models/Movies");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "error de conexion"));
db.once("openUri", function () {
    console.log("Me conecte a mongodb");
});
router.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    }
    next();
}); //funcion habilita el middleware
router.get("/", function (req, res) {
    res.json({
        mensaje: "keep alive",
    });
});
router.route('/movie')
    .post((0, express_validator_1.body)('name').isLength({ min: 5, max: 15 }).withMessage('must be at least 5 chars long'), (0, express_validator_1.body)('actor').isAlphanumeric().withMessage("must be alphanumeric"), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var movie = new Movie();
        movie.name = req.body.name;
        movie.releaseDate = req.body.releaseDate;
        movie.revenue = req.body.revenue;
        movie.actor = req.body.actor;
        try {
            yield movie.save(function (err) {
                if (err) {
                    console.log(err);
                    if (err.name == "ValidationError")
                        res.status(400).send({ error: err.message });
                }
                res.status(201).send({ mensaje: "Pelicula creado" });
            });
        }
        catch (error) {
            res.status(500).send({ error: error });
        }
    });
}).get(function (req, res) {
    Movie.find(function (err, movie) {
        if (err) {
            res.send(err);
        }
        res.status(200).send(movie);
    });
});
router.route("/movie/:id")
    .get(function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movie = yield Movie.findOne({ _id: req.params.id });
            res.send(movie);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Movie doesn't exist!" });
        }
    });
})
    .put((0, express_validator_1.body)('name').isLength({ min: 5, max: 15 }), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movie = yield Movie.findOne({ _id: req.params.id });
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            if (req.body.name) {
                movie.name = req.body.name;
            }
            if (req.body.content) {
                movie.author = req.body.author;
            }
            yield movie.save();
            res.send(movie);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Movie doesn't exist!" });
        }
    });
}).delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Movie.deleteOne({ _id: req.params.id });
        return res.status(204).send();
    }
    catch (_a) {
        res.status(404);
        res.send({ error: "Movie doesn't exist!" });
    }
}));
app.use("/api", router); //url base de nuestro api que tiene las rutas en el routerglobal.fetch = require('node-fetch');
app.listen(port); //abre el puerto de escucha
console.log("sevidor arriba");
