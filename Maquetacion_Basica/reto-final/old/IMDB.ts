const fs = require("fs");
import { Movie } from "./movie"

export class IMDB
{
    public peliculas : Movie[];

    constructor(peliculas: Movie[]){
        this.peliculas = peliculas;
    }

    escribirEnFicheroJSON(nombreFichero: string){

        fs.writeFileSync(nombreFichero,JSON.stringify(this));//escribe en un nuevo fichero nombreFichero este IMDB como una string.

    }

    obtenerInstanciaIMDB(nombreFichero:string):IMDB{
        let data = fs.readFileSync(nombreFichero,"utf8");//lee el nuevo fichero y almacénalo en data.
        let newIMDB = JSON.parse(data);
        console.log("newIMDB object created");
        
        return newIMDB;       
    }

}