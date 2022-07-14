const oddsAndEvens = [13, 3, 4, 10, 7, 2]; 

const sortOddsAndEvens = oddsAndEvens => oddsAndEvens.sort(function(a, b){return a - b});

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);