import { Professional } from "./professional.js"
import { Movie } from "./movie.js"
import { IMDB } from "./imdb.js"

let professional1 = new Professional("Carlos Marina",36,90,173,true,"Spanish",0,"Desarrollador")
let professional2 = new Professional("Quentin Tarantino",56,80,163,false,"American",0,"Director")

let movie1 = new Movie("Kárate a muerte en Badajoz", 1987,"Spanish","Artes marciales");
let movie2 = new Movie("El ete, el oto y el de la moto", 1977,"Spanish","Comedia")

let imdb1 = new IMDB([movie1,movie2])//hay que meterlo como array

imdb1.showmovies()