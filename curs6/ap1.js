// Metoda 1 <=> console din browser
// in terminal rulam comanda: Node
// apoi global
// apoi global.process sau process
// 24+46
// ca sa iesim process.exit() sau Ctrl+C
// Metoda 2 <=> script din browser
// 1. definim o functie

let adunare = (a, b) =>{
    return a+b;
}
// 2. apelam functia
console.log('Suma dintre 24 si 46 este', adunare(24,46));