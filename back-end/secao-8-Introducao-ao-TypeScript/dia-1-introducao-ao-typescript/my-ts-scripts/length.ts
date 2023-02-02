readlineSync = require('readline-sync');

const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(valor: number, baseUnity: string, conversionUnity: string): number {
  const fromIndex = units.indexOf(baseUnity);
  const toIndex = units.indexOf(conversionUnity);
  const exponent = toIndex - fromIndex;
  return valor * Math.pow(10, exponent);
};

function exec3(): void {
  const valor = readlineSync.question('Whats the value?');
  const unidadeBase = readlineSync.question('Whats the base unity?');
  const unidadeDeConversao = readlineSync.question('Whats the conversion unity?');
  const convertedValue = convertArea(valor, unidadeBase, unidadeDeConversao);
  console.log(`${ valor } ${ unidadeBase } é igual a ${ convertedValue }`);
}

exec3();