export class Professional {
    public name: string
    public age: number
    public weight: number
    public height: number
    public isRetired: boolean
    public nationality: string
    public oscarsNumber: number
    public profession: string
    constructor(name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
   public information() {
       let myInformation = {};
        myInformation["name"] = this.name;
        myInformation["age"] = this.age;
        myInformation["weight"] = this.weight;
        myInformation["height"] = this.height;
        myInformation["isRetired"] = this.isRetired;
        myInformation["nationality"] = this.nationality;
        myInformation["oscarsNumber"] = this.oscarsNumber;
        myInformation["profession"] = this.profession;
            console.log(myInformation);
    }
}