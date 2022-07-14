const button = document.querySelector('#btn-counter');
console.log(button);
const counter = document.querySelector('#contador');
console.log(counter);
let clickCount = 0;

const contadorDeCliques = () => {
  clickCount += 1;
  counter.innerText = `Cliques: ${clickCount}`;
}

button.addEventListener('click', contadorDeCliques);