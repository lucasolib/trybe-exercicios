// Calculadora fatorial

let numero = [10];
let fatorial = numero[0];

for(let index = numero[0] - 1; index >= 1; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);