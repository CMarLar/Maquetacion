//Clases
import { Professional } from "./professional";
import { Movie } from "./movie";
import { IMDB } from "./IMDB";

let movie1 = new Movie("Thor",2011,"American","Superhéroes");
let movie2 = new Movie("Rush", 2013,"American","Acción")

let myImdb = new IMDB([movie1,movie2])

let objToStr = JSON.stringify(myImdb)

export {objToStr};

console.log(objToStr);
