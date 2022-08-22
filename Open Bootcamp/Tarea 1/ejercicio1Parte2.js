class Coche {
    constructor(puertas) {
      this.puertas = puertas;
     
    }
}
function incrementarPuerta(puertas) {
    return puertas + 1;
}
function main() {
    miCoche = {
        puertas: 1
    }   
    return incrementarPuerta(miCoche.puertas);
 
}
main();
