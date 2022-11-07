
const fs = require("fs");
const path = "./imdbBBDD.json"

//fs.readFileSync (pathToFile, {encoding, flag})
let data = fs.readFileSync(path,"utf8")
//console.log(data);

//New IMDB object
let newIMDB = JSON.parse(data);
console.log(newIMDB);


