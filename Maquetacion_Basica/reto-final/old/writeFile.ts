import { Movie } from "./movie";
import { IMDB } from "./IMDB";

let movie1 = new Movie("Thor",2011,"American","Superhéroes");
let movie2 = new Movie("Rush", 2013,"American","Acción")

let myImdb = new IMDB([movie1,movie2])

// let objToStr = JSON.stringify(myImdb)


const fs = require("fs");
// let path = "imdbBBDD.json";

// let data = objToStr;

fs.writeFileSync("./imdbBBDD.json",JSON.stringify(myImdb));