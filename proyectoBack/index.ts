import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';
import { FALSE } from 'sass';

dotenv.config();

const port = process.env.PORT;

var bodyParser = require("body-parser");
var app: Express = express();
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
app.use(express.json())

var router = express.Router();
var mongoose = require("mongoose");

var uri = "mongodb+srv://mongouser:password1234@cluster0.xagno.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "error de conexion"));
db.once("openUri", function () {
    console.log("Me conecte a mongodb");
});

app.get('/hola', function (req, res){
    res.send('[GET]Saludos desde express');
});

app.listen(8001, () => {
    console.log('Server is running at http://localhost:8001');

});

app.get('/profesor', function (req, res){
    res.json(
        [
        {correo: "a01657023@tec.mx", password:"diana1234"},
        {correo:"daniela@hotmail.com", actor:"danielaa"},
        ]  
);
});

app.get('/profesor', function (req, res){
res.status(500).send({error:"Falla en el ssitema"}
);
});



var db = mongoose.connection;
db.on("error", console.error.bind(console, "error de conexion"));
db.once("openUri", function () {
    console.log("Me conecte a mongodb");
});


router.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.set(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
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
    .post(body('correo').isEmail().withMessage('must be an email'),
        body('password').isStrongPassword().withMessage('Need to be an strong password'),
        body('grado').isLength({min:1,max:20}).withMessage('Need to be min 1 and max 20'),
        async function (req: express.Request, res: express.Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var estudiante = new Estudiante();
        estudiante.correo = req.body.correo;
        estudiante.password = req.body.password;
        estudiante.grado = req.body.grado;
        try {
            await estudiante.save(function (err: any) {
                if (err) {
                    console.log(err);
                    if (err.name == "ValidationError")
                        res.status(400).send({ error: err.message });
                }
                res.status(201).send({ mensaje: "Estudiante creado" });
            }
            );

        } catch (error) {
            res.status(500).send({ error: error });
        }

    }).get(function (req: express.Request, res: express.Response) {

        Estudiante.find(function (err: any, estudiante: any) {
            if (err) {
                res.send(err);
            }
            res.status(200).send(estudiante);
        });
    });

router.route("/estudiante/:id")
    .get(async function (req: express.Request, res: express.Response) {
        try {
            const estudiante = await Estudiante.findOne({ _id: req.params.id })
            res.send(estudiante)
        } catch {
            res.status(404)
            res.send({ error: "Estudiante doesn't exist!" })
        }
    })
    .put(body('correo').isEmail().withMessage("Need to be an email"), async function (req: express.Request, res: express.Response) {
        try {
            const estudiante = await Estudiante.findOne({ _id: req.params.id });
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            if (req.body.correo) {
                estudiante.correo = req.body.correo
            }
            await estudiante.save()
            res.send(estudiante)
        } catch {
            res.status(404)
            res.send({ error: "Email doesn't exist!" })
        }

    }).delete(async (req, res) => {
        try {
            await Estudiante.deleteOne({ _id: req.params.id })
            return res.status(204).send({ mensaje: "Estudiante eliminado" });
        } catch {
            res.status(404)
            res.send({ error: "Estudiante doesn't exist!" })
        }
    });

    var Profesor = require("./models/Profesores");

    router.route('/profesor')
        .post(body('correo').isEmail().withMessage('must be an email'),
            body('password').isStrongPassword().withMessage('Need to be an strong password'),
            async function (req: express.Request, res: express.Response) {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            var profesor = new Profesor();
            profesor.correo = req.body.correo;
            profesor.password = req.body.password;
            try {
                await profesor.save(function (err: any) {
                    if (err) {
                        console.log(err);
                        if (err.name == "ValidationError")
                            res.status(400).send({ error: err.message });
                    }
                    res.status(201).send({ mensaje: "Profesor creado" });
                }
                );
    
            } catch (error) {
                res.status(500).send({ error: error });
            }
    
        }).get(function (req: express.Request, res: express.Response) {
    
            Profesor.find(function (err: any, profesor: any) {
                if (err) {
                    res.send(err);
                }
                res.status(200).send(profesor);
            });
        });
    
    router.route("/profesor/:id")
        .get(async function (req: express.Request, res: express.Response) {
            try {
                const profesor = await Profesor.findOne({ _id: req.params.id })
                res.send(profesor)
            } catch {
                res.status(404)
                res.send({ error: "Profesor doesn't exist!" })
            }
        })
        .put(body('correo').isEmail().withMessage("Need to be an email"), async function (req: express.Request, res: express.Response) {
            try {
                const profesor = await Profesor.findOne({ _id: req.params.id });
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                if (req.body.correo) {
                    profesor.correo = req.body.correo
                }
                await profesor.save()
                res.send(profesor)
            } catch {
                res.status(404)
                res.send({ error: "Email doesn't exist!" })
            }
    
        }).delete(async (req, res) => {
            try {
                await Profesor.deleteOne({ _id: req.params.id })
                return res.status(204).send({ mensaje: "Profesor eliminado" });
            } catch {
                res.status(404)
                res.send({ error: "Profesor doesn't exist!" })
            }
        });
    

app.use("/api", router); //url base de nuestro api que tiene las rutas en el routerglobal.fetch = require('node-fetch');

app.listen(port); //abre el puerto de escucha

console.log("sevidor arriba");