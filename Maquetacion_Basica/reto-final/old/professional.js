"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.information = function () {
        var myInformation = {};
        myInformation["name"] = this.name;
        myInformation["age"] = this.age;
        myInformation["weight"] = this.weight;
        myInformation["height"] = this.height;
        myInformation["isRetired"] = this.isRetired;
        myInformation["nationality"] = this.nationality;
        myInformation["oscarsNumber"] = this.oscarsNumber;
        myInformation["profession"] = this.profession;
        console.log(myInformation);
    };
    return Professional;
}());
exports.Professional = Professional;
