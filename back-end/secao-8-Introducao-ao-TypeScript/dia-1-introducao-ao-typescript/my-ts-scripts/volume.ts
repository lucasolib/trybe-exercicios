const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume(valor: number, baseUnity: string, conversionUnity: string): number {
  const fromIndex = massUnits.indexOf(baseUnity);
  const toIndex = massUnits.indexOf(conversionUnity);
  const exponent=  toIndex - fromIndex ;
  return valor * Math.pow(1000, exponent);
};