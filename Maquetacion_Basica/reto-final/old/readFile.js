//NOT WORKING YET
var fs = require("fs");
var path = "./imdbBBDD.json";
//fs.readFileSync (pathToFile, {encoding, flag})
var data = fs.readFileSync(path, "utf8");
//console.log(data);
//New IMDB object
var newIMDB = JSON.parse(data);
console.log(newIMDB);
