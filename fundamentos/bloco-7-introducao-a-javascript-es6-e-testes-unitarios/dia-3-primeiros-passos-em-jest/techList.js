const techList = (techs, name) => {
  if (techs.length === 0 || name === undefined) {
    let vazio = 'Vazio!';
    return vazio;
  }
  let techObject = [];
  let techsOrdenado = techs.sort();
  for (let count of techsOrdenado) {
    techObject.push({ tech: count, name });
  }
  return techObject;
}

module.exports = techList;