import { Professional } from "./professional.js"
import { Movie } from "./movie.js"


export class IMDB
{
    constructor(peliculas){ //new Imdb ([movie1,movie2])
        this.peliculas = peliculas;//tipo: array de Movies.
    }

    showmovies(){
        console.log(this.peliculas);
    }
}

