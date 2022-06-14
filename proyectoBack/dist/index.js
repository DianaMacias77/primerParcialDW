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
app.listen(8001, () => {
    console.log('Server is running at http://localhost:8001');
});
app.get('/profesor', function (req, res) {
    res.json([
        { correo: "a01657023@tec.mx", password: "diana1234" },
        { correo: "daniela@hotmail.com", actor: "danielaa" },
    ]);
});
app.get('/profesor', function (req, res) {
    res.status(500).send({ error: "Falla en el ssitema" });
});
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
var Estudiante = require("./models/Estudiantes");
router.route('/estudiante')
    .post((0, express_validator_1.body)('correo').isEmail().withMessage('must be an email'), (0, express_validator_1.body)('password').isStrongPassword().withMessage('Need to be an strong password'), (0, express_validator_1.body)('grado').isLength({ min: 1, max: 20 }).withMessage('Need to be min 1 and max 20'), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var estudiante = new Estudiante();
        estudiante.correo = req.body.correo;
        estudiante.password = req.body.password;
        estudiante.grado = req.body.grado;
        try {
            yield estudiante.save(function (err) {
                if (err) {
                    console.log(err);
                    if (err.name == "ValidationError")
                        res.status(400).send({ error: err.message });
                }
                res.status(201).send({ mensaje: "Estudiante creado" });
            });
        }
        catch (error) {
            res.status(500).send({ error: error });
        }
    });
}).get(function (req, res) {
    Estudiante.find(function (err, estudiante) {
        if (err) {
            res.send(err);
        }
        res.status(200).send(estudiante);
    });
});
router.route("/estudiante/:id")
    .get(function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const estudiante = yield Estudiante.findOne({ _id: req.params.id });
            res.send(estudiante);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Estudiante doesn't exist!" });
        }
    });
})
    .put((0, express_validator_1.body)('correo').isLength({ min: 10, max: 25 }), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const estudiante = yield Estudiante.findOne({ _id: req.params.id });
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            if (req.body.correo) {
                estudiante.correo = req.body.correo;
            }
            if (req.body.password) {
                estudiante.password = req.body.password;
            }
            if (req.body.grado) {
                estudiante.grado = req.body.grado;
            }
            yield estudiante.save();
            res.send(estudiante);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Estudiante doesn't exist!" });
        }
    });
}).delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Estudiante.deleteOne({ _id: req.params.id });
        return res.status(204).send();
    }
    catch (_a) {
        res.status(404);
        res.send({ error: "Estudiante doesn't exist!" });
    }
}));
var Profesor = require("./models/Profesores");
router.route('/profesor')
    .post((0, express_validator_1.body)('correo').isEmail().withMessage('must be an email'), (0, express_validator_1.body)('password').isStrongPassword().withMessage('Need to be an strong password (need to contain capital lettters, characters and numbers)'), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var profesor = new Profesor();
        profesor.correo = req.body.correo;
        profesor.password = req.body.password;
        try {
            yield profesor.save(function (err) {
                if (err) {
                    console.log(err);
                    if (err.name == "ValidationError")
                        res.status(400).send({ error: err.message });
                }
                res.status(201).send({ mensaje: "Profesor creado" });
            });
        }
        catch (error) {
            res.status(500).send({ error: error });
        }
    });
}).get(function (req, res) {
    Profesor.find(function (err, profesor) {
        if (err) {
            res.send(err);
        }
        res.status(200).send(profesor);
    });
});
router.route("/profesor/:id")
    .get(function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const profesor = yield Profesor.findOne({ _id: req.params.id });
            res.send(profesor);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Profesor doesn't exist!" });
        }
    });
})
    .put((0, express_validator_1.body)('correo').isLength({ min: 10, max: 25 }), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const profesor = yield Profesor.findOne({ _id: req.params.id });
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            if (req.body.correo) {
                profesor.correo = req.body.correo;
            }
            if (req.body.content) {
                profesor.password = req.body.password;
            }
            yield profesor.save();
            res.send(profesor);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Profesor doesn't exist!" });
        }
    });
}).delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Profesor.deleteOne({ _id: req.params.id });
        return res.status(204).send();
    }
    catch (_b) {
        res.status(404);
        res.send({ error: "Profesor doesn't exist!" });
    }
}));
app.use("/api", router); //url base de nuestro api que tiene las rutas en el routerglobal.fetch = require('node-fetch');
app.listen(port); //abre el puerto de escucha
console.log("sevidor arriba");
