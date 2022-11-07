import { Professional } from "./professional";

let daniel: Professional = new Professional("Daniel Brühl", 44, 80, 1.76, false, "spanish", 0, "actor");
let arnold: Professional = new Professional("Arnold Schwarzenegger", 75, 113, 1.88, false, "american", 0, "actor/productor");
let chris: Professional = new Professional("Chris Hemsworth", 39, 95, 1.91, false, "australian", 0, "actor/productor");
let kurt: Professional = new Professional("Kurt Russell", 71, 98, 1.76, false, "american", 0, "actor");
let linda: Professional = new Professional("Linda Hamilton", 66, 80, 1.68, false, "american", 0, "actor");

let kenneth: Professional = new Professional("Kenneth Branagh", 61, 84, 1.77, false, "english", 1, "productor/guionista");
let ron: Professional = new Professional("Ron Howard", 68, 77, 1.75, false, "american", 2, "director/productor");
let jhon: Professional = new Professional("John Carpenter", 74, 91, 1.83, true, "american", 0, "director/guionista");
let anthony: Professional = new Professional("Anthony Russo", 52, 64, 1.74, false, "american", 0, "director/productor");
let joseph: Professional = new Professional("Joseph V. Russo", 51, 78, 1.70, false, "american", 0, "director/productor");
let james: Professional = new Professional("James Cameron", 68, 86, 1.88, false, "canadian", 3, "director/productor");
daniel.information();           