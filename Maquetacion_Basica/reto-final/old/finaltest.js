"use strict";
/*
Crear un nuevo fichero finaltest.ts que solicite por pantalla cada uno de las propiedades
de la clase Profesional e inserte un nuevo profesional a una película del fichero
“imdbBBDD.json”

- PISTA: Buscar readLineSync
*/
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline-sync");
var professional_1 = require("./professional");
var chris = new professional_1.Professional("Chris Hemsworth", 39, 95, 1.91, false, "australian", 0, "actor/productor");
chris.information();
//Recuperamos JSON con IMDB.
var data = fs.readFileSync("./imdbBBDD.json", "utf8");
var getIMDB = JSON.parse(data);
//Usuario introduce información del profesional
var name = readline.question("Inserta un nombre");
var ageString = readline.question("Inserta una edad");
var weightString = readline.question("Inserta un peso");
var heightString = readline.question("Inserta una altura");
var isRetiredString = readline.question("¿Está retirado? S/N");
var nationality = readline.question("Inserta una nacionalidad");
var oscarsNumberString = readline.question("Inserta el número de Oscars que ha ganado");
var profession = readline.question("Inserta una profesión");
//Tratamos la información para convertir en el tipo de dato según lo que necesitemos después en el nuevo profesional
var age = parseInt(ageString);
var weight = parseInt(weightString);
var height = parseInt(heightString);
var isRetired;
if (isRetiredString == "N") {
    isRetired = false;
}
else {
    isRetired = true;
}
;
var oscarsNumber = parseInt(oscarsNumberString);
//Creamos un nuevo profesional utilizando como parámetros las variables declaradas arriba
var newProfessional = new professional_1.Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession);
//Push al array de actores de la nueva película
getIMDB.peliculas[0].actors.push(newProfessional);
console.log(getIMDB.peliculas[0].actors);
