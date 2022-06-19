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
/* const checkJwt = auth({
    audience: 'http://localhost',
    issuerBaseURL: 'https://dev-5xxxigo6.us.auth0.com/'
}); */
var uri = "mongodb+srv://mongouser:password1234@cluster0.csseq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "error de conexion"));
db.once("openUri", function () {
    console.log("Me conecte a mongodb");
});
app.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
});
app.listen(8002, () => {
    console.log('Server is running at http://localhost:8002');
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
    .post((0, express_validator_1.body)('correo').isEmail().withMessage('must be an email'), (0, express_validator_1.body)('password').isStrongPassword().withMessage('Need to be an strong password'), (0, express_validator_1.body)('grado').isLength({ min: 1, max: 20 }).withMessage('Need to be min 1 and max 20'), 
/*checkJwt,*/
function (req, res) {
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
}).get(/*checkJwt,*/ function (req, res) {
    Estudiante.find(function (err, estudiante) {
        if (err) {
            res.send(err);
        }
        res.status(200).send(estudiante);
    });
});
router.route("/estudiante/:id")
    .get(/*checkJwt,*/ function (req, res) {
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
    .put(/*checkJwt,*/ (0, express_validator_1.body)('correo').isEmail().withMessage("Need to be an email"), (0, express_validator_1.body)('password').isStrongPassword().withMessage("Need to be an strong password"), (0, express_validator_1.body)('grado').isLength({ min: 1, max: 20 }).withMessage("Need to be min 1 digit and less than 20"), function (req, res) {
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
            res.send({ error: "Email doesn't exist!" });
        }
    });
}).delete(/*checkJwt,*/ (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Estudiante.deleteOne({ _id: req.params.id });
        return res.status(204).send({ mensaje: "Estudiante eliminado" });
    }
    catch (_a) {
        res.status(404);
        res.send({ error: "Estudiante doesn't exist!" });
    }
}));
var Profesor = require("./models/Profesores");
router.route('/profesor')
    .post((0, express_validator_1.body)('correo').isEmail().withMessage('must be an email'), (0, express_validator_1.body)('password').isStrongPassword().withMessage('Need to be an strong password'), 
/*checkJwt,*/
function (req, res) {
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
}).get(/*checkJwt,*/ function (req, res) {
    Profesor.find(function (err, profesor) {
        if (err) {
            res.send(err);
        }
        res.status(200).send(profesor);
    });
});
router.route("/profesor/:id")
    .get(/*checkJwt,*/ function (req, res) {
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
    .put(/*checkJwt,*/ (0, express_validator_1.body)('correo').isEmail().withMessage("Need to be an email"), (0, express_validator_1.body)('password').isStrongPassword().withMessage("Need to be an strong password"), function (req, res) {
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
            yield profesor.save();
            res.send(profesor);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Email doesn't exist!" });
        }
    });
}).delete(/*checkJwt,*/ (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Profesor.deleteOne({ _id: req.params.id });
        return res.status(204).send({ mensaje: "Profesor eliminado" });
    }
    catch (_b) {
        res.status(404);
        res.send({ error: "Profesor doesn't exist!" });
    }
}));
var conEstudiante = require("./models/conEstudiante");
router.route('/conestudiante')
    .post((0, express_validator_1.body)('nombre').isLength({ min: 1, max: 20 }).withMessage('Need to be min 1 and max 20'), (0, express_validator_1.body)('apellido').isLength({ min: 1, max: 50 }).withMessage('Need to be min 1 and max 50'), (0, express_validator_1.body)('email').isEmail().withMessage('must be an email'), (0, express_validator_1.body)('telefono').isMobilePhone("es-MX").withMessage('must be a phone number'), (0, express_validator_1.body)('mensaje').isLength({ min: 1, max: 100 }).withMessage('Need to be min 1 and max 100'), 
/*checkJwt,*/
function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var conestudiante = new conEstudiante();
        conestudiante.nombre = req.body.nombre;
        conestudiante.apellido = req.body.apellido;
        conestudiante.email = req.body.email;
        conestudiante.telefono = req.body.telefono;
        conestudiante.mensaje = req.body.mensaje;
        try {
            yield conestudiante.save(function (err) {
                if (err) {
                    console.log(err);
                    if (err.name == "ValidationError")
                        res.status(400).send({ error: err.message });
                }
                res.status(201).send({ mensaje: "Comentario creado" });
            });
        }
        catch (error) {
            res.status(500).send({ error: error });
        }
    });
}).get(/*checkJwt,*/ function (req, res) {
    conEstudiante.find(function (err, conestudiante) {
        if (err) {
            res.send(err);
        }
        res.status(200).send(conestudiante);
    });
});
router.route("/conestudiante/:id")
    .get(/*checkJwt,*/ function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conestudiante = yield conEstudiante.findOne({ _id: req.params.id });
            res.send(conestudiante);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Comentario doesn't exist!" });
        }
    });
})
    .put(/*checkJwt,*/ (0, express_validator_1.body)('nombre').isLength({ min: 1, max: 20 }).withMessage('Need to be min 1 and max 20'), (0, express_validator_1.body)('apellido').isLength({ min: 1, max: 50 }).withMessage('Need to be min 1 and max 50'), (0, express_validator_1.body)('email').isEmail().withMessage('must be an email'), (0, express_validator_1.body)('telefono').isMobilePhone("es-MX").withMessage('must be a phone number'), (0, express_validator_1.body)('mensaje').isLength({ min: 1, max: 100 }).withMessage('Need to be min 1 and max 100'), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conestudiante = yield conEstudiante.findOne({ _id: req.params.id });
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            if (req.body.nombre) {
                conestudiante.nombre = req.body.nombre;
            }
            if (req.body.apellido) {
                conestudiante.apellido = req.body.apellido;
            }
            if (req.body.email) {
                conestudiante.email = req.body.email;
            }
            if (req.body.telefono) {
                conestudiante.telefono = req.body.telefono;
            }
            if (req.body.mensaje) {
                conestudiante.mensaje = req.body.mensaje;
            }
            yield conestudiante.save();
            res.send(conestudiante);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Email doesn't exist!" });
        }
    });
}).delete(/*checkJwt,*/ (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield conEstudiante.deleteOne({ _id: req.params.id });
        return res.status(204).send({ mensaje: "Comentario eliminado" });
    }
    catch (_c) {
        res.status(404);
        res.send({ error: "Comentario doesn't exist!" });
    }
}));
var conProfesor = require("./models/conProfesor");
router.route('/conprofesor')
    .post((0, express_validator_1.body)('nombre').isLength({ min: 1, max: 20 }).withMessage('Need to be min 1 and max 20'), (0, express_validator_1.body)('apellido').isLength({ min: 1, max: 50 }).withMessage('Need to be min 1 and max 50'), (0, express_validator_1.body)('email').isEmail().withMessage('must be an email'), (0, express_validator_1.body)('telefono').isMobilePhone("es-MX").withMessage('must be a phone number'), (0, express_validator_1.body)('mensaje').isLength({ min: 1, max: 100 }).withMessage('Need to be min 1 and max 100'), 
/*checkJwt,*/
function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var conprofesor = new conProfesor();
        conprofesor.nombre = req.body.nombre;
        conprofesor.apellido = req.body.apellido;
        conprofesor.email = req.body.email;
        conprofesor.telefono = req.body.telefono;
        conprofesor.mensaje = req.body.mensaje;
        try {
            yield conprofesor.save(function (err) {
                if (err) {
                    console.log(err);
                    if (err.name == "ValidationError")
                        res.status(400).send({ error: err.message });
                }
                res.status(201).send({ mensaje: "Comentario creado" });
            });
        }
        catch (error) {
            res.status(500).send({ error: error });
        }
    });
}).get(/*checkJwt,*/ function (req, res) {
    conProfesor.find(function (err, conprofesor) {
        if (err) {
            res.send(err);
        }
        res.status(200).send(conprofesor);
    });
});
router.route("/conprofesor/:id")
    .get(/*checkJwt,*/ function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conprofesor = yield conEstudiante.findOne({ _id: req.params.id });
            res.send(conprofesor);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Comentario doesn't exist!" });
        }
    });
})
    .put(/*checkJwt,*/ (0, express_validator_1.body)('nombre').isLength({ min: 1, max: 20 }).withMessage('Need to be min 1 and max 20'), (0, express_validator_1.body)('apellido').isLength({ min: 1, max: 50 }).withMessage('Need to be min 1 and max 50'), (0, express_validator_1.body)('email').isEmail().withMessage('must be an email'), (0, express_validator_1.body)('telefono').isMobilePhone("es-MX").withMessage('must be a phone number'), (0, express_validator_1.body)('mensaje').isLength({ min: 1, max: 100 }).withMessage('Need to be min 1 and max 100'), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conprofesor = yield conProfesor.findOne({ _id: req.params.id });
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            if (req.body.nombre) {
                conprofesor.nombre = req.body.nombre;
            }
            if (req.body.apellido) {
                conprofesor.apellido = req.body.apellido;
            }
            if (req.body.email) {
                conprofesor.email = req.body.email;
            }
            if (req.body.telefono) {
                conprofesor.telefono = req.body.telefono;
            }
            if (req.body.mensaje) {
                conprofesor.mensaje = req.body.mensaje;
            }
            yield conprofesor.save();
            res.send(conprofesor);
        }
        catch (_a) {
            res.status(404);
            res.send({ error: "Email doesn't exist!" });
        }
    });
}).delete(/*checkJwt,*/ (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield conProfesor.deleteOne({ _id: req.params.id });
        return res.status(204).send({ mensaje: "Comentario eliminado" });
    }
    catch (_d) {
        res.status(404);
        res.send({ error: "Comentario doesn't exist!" });
    }
}));
app.use("/api", router); //url base de nuestro api que tiene las rutas en el routerglobal.fetch = require('node-fetch');
app.listen(port); //abre el puerto de escucha
console.log("sevidor arriba");
