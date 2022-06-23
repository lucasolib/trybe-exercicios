// Maior numero primo

let numero = 0;

for(let index = 2; index <= 50; index += 1) {
    let ePrimo = true;
    for(let indexdivisor = 2; indexdivisor < index; indexdivisor += 1) {
       if(index % indexdivisor === 0) {
         ePrimo = false;
       }
    }
    if (ePrimo) {
       numero = index;
    }
}

console.log(numero);