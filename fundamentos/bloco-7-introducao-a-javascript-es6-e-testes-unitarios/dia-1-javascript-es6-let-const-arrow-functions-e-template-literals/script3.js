const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;

const maiorPalavra = (frase) => { 
  let fraseCorreta = frase.split(' ');
  let palavraMaior = fraseCorreta[0];
  for (const palavra of fraseCorreta) {
    if (palavra.length > palavraMaior.length) {
      palavraMaior = palavra;
    }
  } return palavraMaior;
}
