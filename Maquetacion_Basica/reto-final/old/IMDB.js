"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMDB = void 0;
var fs = require("fs");
var IMDB = /** @class */ (function () {
    function IMDB(peliculas) {
        this.peliculas = peliculas;
    }
    IMDB.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        fs.writeFileSync(nombreFichero, JSON.stringify(this)); //escribe en un nuevo fichero nombreFichero este IMDB como una string.
    };
    IMDB.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var data = fs.readFileSync(nombreFichero, "utf8"); //lee el nuevo fichero y almacénalo en data.
        var newIMDB = JSON.parse(data);
        console.log("newIMDB object created");
        return newIMDB;
    };
    return IMDB;
}());
exports.IMDB = IMDB;
