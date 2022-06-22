// Salario Bruto x Salario liquido

let salario = 7712;
let inss = null;
let salarioInss = null;
let ir = null;
let salarioLiquido = null;

switch (true) {
   
  case salario <= 1556.94:
    inss = salario * 8 / 100;
    salarioInss = salario - inss;
    break;

  case salario >= 1556.95 && salario <= 2594.92: 
   inss = salario * 9 / 100; 
   salarioInss = salario - inss; 
   break;
 
  case salario >= 2594.93 && salario <= 5189.82: 
   inss = salario * 11 / 100; 
   salarioInss = salario - inss; 
   break;
   
  case salario > 5189.82: 
   inss = 570.88; 
   salarioInss = salario - inss; 
   break;
}

switch (true) {
  case salarioInss <= 1903.98:
    salarioLiquido = salarioInss;
    break;

  case salarioInss >= 1903.99 && salarioInss <= 2826.65:  
   ir = (salarioInss * 7.5 / 100) - 142.80;
   salarioLiquido = salarioInss - ir
   break;

  case salarioInss >= 2826.66 && salarioInss <= 3751.05:  
   ir = (salarioInss * 15 / 100) - 354.80;
   salarioLiquido = salarioInss - ir
   break;

  case salarioInss >= 3751.06 && salarioInss <= 4664.68:  
   ir = (salarioInss * 22.5 / 100) - 636.13;
   salarioLiquido = salarioInss - ir
   break;

  case salarioInss > 4664.68:
   ir = (salarioInss *  27.5 / 100) - 869.36;
   salarioLiquido = salarioInss - ir
   break; 
}

let salarioArredondado = parseFloat(salarioLiquido.toFixed(2));

console.log(salarioLiquido);
console.log(salarioArredondado);