const substituiLetraX = (nome) => {
  const frase = `Tryber x aqui!`;
  let fraseSubstituida = frase.replace("x", nome);
  return fraseSubstituida;
}

const habilidades = (tryber) => {
  const skills = ['HTML', 'CSS', 'JS'];
  return `${tryber}
Minhas três principais habilidades são:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}`
}

console.log(habilidades(substituiLetraX('Lucas')));