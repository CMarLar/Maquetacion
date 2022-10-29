/*Escribir una función en JavaScript que recoja la información de los campos de texto en formato JSON cada vez que se pulse el botón "solicitar información". Esta información se debe guardar en un array.

Escribe ahora una segunda función en JavaScript que cada vez que se pulse el boton
"filtrar", nos muestre por consola la información de las solicitudes recibidas que tengan
como destino Canarias, Mallorca y Galicia (tener en cuenta que los usuarios pueden
escribir, el destino en mayuscula o minuscula).
*/

// let name = document.getElementById("formName").value;
// let origin = document.getElementById("formOrigin").value;
// let destination = document.getElementById("formDestination").value;
// let numPeople = document.getElementById("formNumPeople").value;
// let date = document.getElementById("formDate").value;

let travelArrays = []
function createTravel(){

    let name = document.getElementById("formName").value;
    let origin = document.getElementById("formOrigin").value;
    let destination = document.getElementById("formDestination").value;
    let numPeople = document.getElementById("formNumPeople").value;
    let date = document.getElementById("formDate").value;

    let travel = {name:name,origin:origin,destination:destination,numPeople:numPeople,date:date}
    
    travelArrays.push(travel)

    console.log(travelArrays);
}



function filterTravels(){
for (let i = 0; i < travelArrays.length; i++) {
    if((travelArrays[i].destination == "Mallorca" || travelArrays[i].destination == "mallorca") || (travelArrays[i].destination == "Galicia" || travelArrays[i].destination == "galicia") || (travelArrays[i].destination == "Canarias" || travelArrays[i].destination == "canarias")){
        //console.log(travelArrays[i]);//Descomentar para ver por consola.
        
        let getMessage = document.getElementById("filteredTravels").innerHTML = 
        "Nombre: " + travelArrays[i].name + "\n" + 
        "Origen: " + travelArrays[i].origin + "\n" +
        "Destino: " + travelArrays[i].destination + "\n" +
        "Número de personas: " + travelArrays[i].numPeople + "\n" +
        "Fecha: " + travelArrays[i].date

    }
    }
}


