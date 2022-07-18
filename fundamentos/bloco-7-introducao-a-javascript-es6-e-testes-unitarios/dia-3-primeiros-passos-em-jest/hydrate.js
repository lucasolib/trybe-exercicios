const hydrate = (drinks) => {
  let regex = /\d+/g;
  let string = drinks;
  let matches = string.match(regex);
  let sumMatches = 0;
  for (let sum of matches) {
    let sumNumber = parseInt(sum, 10);
    sumMatches += sumNumber;
  } if (sumMatches > 1) {
    let water = `${sumMatches} copos de água`;
    return water;
  }
  let water = `${sumMatches} copo de água`;
  return water;
}

module.exports = hydrate;