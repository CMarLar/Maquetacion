import {Movie} from "./movie.js"

import { Professional } from "./professional.js"

let professional1 = new Professional("Carlos Marina",36,90,173,true,"Spanish",0,"Desarrollador")
let professional2 = new Professional("Quentin Tarantino",56,80,163,false,"American",0,"Director")

let movie1 = new Movie("Kárate a muerte en Badajoz", 1987,"Spanish","Artes marciales");

movie1.showMovieData()
