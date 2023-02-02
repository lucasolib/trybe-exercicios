readlineSync = require('readline-sync');

const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertCapacity(valor: number, baseUnity: string, conversionUnity: string): number {
  const fromIndex = massUnits.indexOf(baseUnity);
  const toIndex = massUnits.indexOf(conversionUnity);
  const exponent=  toIndex - fromIndex ;
  return valor * Math.pow(10, exponent);
};

function exec2(): void {
  const valor = readlineSync.question('Whats the value?');
  const unidadeBase = readlineSync.question('Whats the base unity?');
  const unidadeDeConversao = readlineSync.question('Whats the conversion unity?');
  const convertedValue = convertArea(valor, unidadeBase, unidadeDeConversao);
  console.log(`${ valor } ${ unidadeBase } é igual a ${ convertedValue }`);
}

exec2();