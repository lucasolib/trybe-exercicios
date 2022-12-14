const readline = require('readline-sync');

const calcIMC = () => {
  const weigth = readline.questionFloat('Qual é seu peso em KG? ');
  const heigth = readline.questionFloat('Qual é sua altura em metros? ');
  const multipliedHeigth = heigth*heigth;
  const IMC = weigth/multipliedHeigth;
  const roundIMC = IMC.toFixed(2);
  let situation = 'Unknown';
  if (roundIMC < 18.5) {
    situation = 'Magreza';
  } else if (roundIMC >= 18.5 && roundIMC < 24.9) {
    situation = 'Peso normal';
  } else if (roundIMC >= 25 && roundIMC < 29.9) {
    situation = 'Acima do Peso';
  } else if (roundIMC >= 30 && roundIMC < 34.9) {
    situation = 'Obesidade Grau I';
  } else if (roundIMC >= 35 && roundIMC < 39.9) {
    situation = 'Obesidade Grau II';
  } else {
    situation = 'Obesidade Grau III ou IV';
  } return `Seu IMC é: ${roundIMC}. Sua situação é ${situation}!`;
}

console.log(calcIMC());