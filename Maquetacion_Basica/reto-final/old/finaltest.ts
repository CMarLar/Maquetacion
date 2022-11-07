/*
Crear un nuevo fichero finaltest.ts que solicite por pantalla cada uno de las propiedades
de la clase Profesional e inserte un nuevo profesional a una película del fichero
“imdbBBDD.json”

- PISTA: Buscar readLineSync
*/

const fs = require("fs");
const readline = require("readline-sync");
import { Professional } from "./professional";
import { Movie } from "./movie";

let chris: Professional = new Professional("Chris Hemsworth", 39, 95, 1.91, false, "australian", 0, "actor/productor");


chris.information();


//Recuperamos JSON con IMDB.
let data = fs.readFileSync("./imdbBBDD.json","utf8");
let getIMDB = JSON.parse(data);

//Usuario introduce información del profesional
let name: string = readline.question("Inserta un nombre");
let ageString: string = readline.question("Inserta una edad");
let weightString: string = readline.question("Inserta un peso");
let heightString: string = readline.question("Inserta una altura");
let isRetiredString: string = readline.question("¿Está retirado? S/N");
let nationality: string = readline.question("Inserta una nacionalidad");
let oscarsNumberString: string = readline.question("Inserta el número de Oscars que ha ganado")
let profession: string = readline.question("Inserta una profesión")

//Tratamos la información para convertir en el tipo de dato según lo que necesitemos después en el nuevo profesional
let age: number = parseInt(ageString)
let weight:number = parseInt(weightString);
let height:number = parseInt(heightString);
let isRetired:boolean;
if(isRetiredString == "N") {isRetired = false}
else{isRetired = true};
let oscarsNumber = parseInt(oscarsNumberString);

//Creamos un nuevo profesional utilizando como parámetros las variables declaradas arriba
let newProfessional = new Professional(name,age,weight,height,isRetired,nationality,oscarsNumber,profession);

//Push al array de actores de la nueva película
getIMDB.peliculas[0].actors.push(newProfessional);

console.log(getIMDB.peliculas[0].actors);

