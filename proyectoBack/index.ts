
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

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
app.use(express.json());

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

app.get('/movie', function (req, res){
        res.json(
            [
            {title: "Rocky", actor:"Sylvester Stalone"},
            {title:"Harry Potter", actor:"Daneil Radclife"},
            ]  
    );
});

app.get('/movie', function (req, res){
    res.status(500).send({error:"Falla en el ssitema"}
    );
});

app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');

});

router.route("/alumnos")
    .post(async function (req, res){
        var nombre = req.body.nombre;

        res.status(200).json({
            mensaje: nombre
        }
        );

    });

var Movie = require("./models/Movies");

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


router.route('/movie')
    .post(body('name').isLength({ min: 5, max: 15 }).withMessage('must be at least 5 chars long'),
        body('actor').isAlphanumeric().withMessage("must be alphanumeric"),
        async function (req: express.Request, res: express.Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var movie = new Movie();
        movie.name = req.body.name;
        movie.releaseDate = req.body.releaseDate;
        movie.revenue = req.body.revenue;
        movie.actor = req.body.actor;
        try {
            await movie.save(function (err: any) {
                if (err) {
                    console.log(err);
                    if (err.name == "ValidationError")
                        res.status(400).send({ error: err.message });
                }
                res.status(201).send({ mensaje: "Pelicula creado" });
            }
            );
            res.json({mensaje: "pelicula creado"});

        } catch (error) {
            res.status(500).send({ error: error });
        }

    }).get(function (req: express.Request, res: express.Response) {

        Movie.find(function (err: any, movie: any) {
            if (err) {
                res.send(err);
            }
            res.status(200).send(movie);
        });
    });

router.route("/movie/:id")
    .get(async function (req: express.Request, res: express.Response) {
        try {
            const movie = await Movie.findOne({ _id: req.params.id })
            res.send(movie)
        } catch {
            res.status(404)
            res.send({ error: "Movie doesn't exist!" })
        }
    })
    .put(body('name').isLength({ min: 5, max: 15 }), async function (req: express.Request, res: express.Response) {
        try {
            const movie = await Movie.findOne({ _id: req.params.id });
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            if (req.body.name) {
                movie.name = req.body.name
            }

            if (req.body.content) {
                movie.author = req.body.author
            }

            await movie.save()
            res.send(movie)
        } catch {
            res.status(404)
            res.send({ error: "Movie doesn't exist!" })
        }

    }).delete(async (req, res) => {
        try {
            await Movie.deleteOne({ _id: req.params.id })
            return res.status(204).send()
        } catch {
            res.status(404)
            res.send({ error: "Movie doesn't exist!" })
        }
    });



app.use("/api", router); //url base de nuestro api que tiene las rutas en el routerglobal.fetch = require('node-fetch');

app.listen(port); //abre el puerto de escucha

console.log("sevidor arriba");