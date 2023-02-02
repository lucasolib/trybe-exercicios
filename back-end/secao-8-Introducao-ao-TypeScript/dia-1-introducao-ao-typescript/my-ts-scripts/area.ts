readlineSync = require('readline-sync');

const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convertArea(valor: number, baseUnity: string, conversionUnity: string): number {
  const fromIndex = massUnits.indexOf(baseUnity);
  const toIndex = massUnits.indexOf(conversionUnity);
  const exponent=  toIndex - fromIndex ;
  return valor * Math.pow(100, exponent);
};

function exec1(): void {
  const valor = readlineSync.question('Whats the value?');
  const unidadeBase = readlineSync.question('Whats the base unity?');
  const unidadeDeConversao = readlineSync.question('Whats the conversion unity?');
  const convertedValue = convertArea(valor, unidadeBase, unidadeDeConversao);
  console.log(`${ valor } ${ unidadeBase } é igual a ${ convertedValue }`);
}

exec1();