const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (car) => {
  const [ name, marca, year] = car;
  return {
    name,
    marca,
    year
  }
};

console.log(toObject(palio));