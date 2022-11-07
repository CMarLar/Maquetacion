"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("./movie");
var IMDB_1 = require("./IMDB");
var movie1 = new movie_1.Movie("Thor", 2011, "American", "Superhéroes");
var movie2 = new movie_1.Movie("Rush", 2013, "American", "Acción");
var myImdb = new IMDB_1.IMDB([movie1, movie2]);
// let objToStr = JSON.stringify(myImdb)
var fs = require("fs");
// let path = "imdbBBDD.json";
// let data = objToStr;
fs.writeFileSync("./imdbBBDD.json", JSON.stringify(myImdb));
