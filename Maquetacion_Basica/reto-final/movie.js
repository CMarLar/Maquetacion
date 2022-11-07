import { Professional } from "./professional.js"
export class Movie 
{
    constructor(title, releaseYear, nationality, genre){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = [];
        this.nationality;
        this.director;
        this.writer;
        this.language;
        this.plataforma;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre;
    }


    showMovieData(){
        console.log(this.title);
        console.log(this.releaseYear);
        console.log(this.actors);
        console.log(this.nationality);
        console.log(this.director);
        console.log(this.writer);
        console.log(this.language);
        console.log(this.plataforma);
        console.log(this.isMCU);
        console.log(this.mainCharacterName);
        console.log(this.producer);
        console.log(this.distributor); 
        console.log(this.genre);       
    }

}