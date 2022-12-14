const fs = require('fs').promises;

const readAll = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const dataParsed = JSON.parse(data);
  dataParsed.forEach((simpson) => {
    console.log(`${simpson.id} - ${simpson.name}`);
  });
}

const getSimpson = async (id) => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const dataParsed = JSON.parse(data);
  const idExist = dataParsed.find((simpson) => {
    const numberSimpsonId = Number(simpson.id);
    return id === numberSimpsonId;
  });
  const promise = new Promise((resolve, reject) => {
    if (!idExist)
      reject(new Error('Id não encontrado! Tente novamente com outro ID.'));

    const simpson = idExist;
    resolve(simpson)
  });

  return promise;
}

const removeSimpsonId6And10 = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const dataParsed = JSON.parse(data);
  dataParsed.splice(5, 1);
  dataParsed.splice(8, 1);
  const dataStringify = JSON.stringify(dataParsed);
  await fs.writeFile('./simpsons.json', dataStringify);
}

const onlySimpsonsFamily = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const dataParsed = JSON.parse(data);
  const simpsonsFamily = dataParsed.splice(0, 5);
  const dataStringify = JSON.stringify(simpsonsFamily);
  await fs.writeFile('./simpsonFamily.json', dataStringify);
}

const addNelsonToSimpsonsFamily = async () => {
  const fullData = await fs.readFile('./simpsons.json', 'utf-8');
  const dataParsed = JSON.parse(fullData);
  const nelson = dataParsed.find((simpson) => (simpson.name === 'Nelson Muntz'));
  const familyData = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const familyParsed = JSON.parse(familyData);
  familyParsed.push(nelson);
  const familyStringify = JSON.stringify(familyParsed);
  await fs.writeFile('./simpsonFamily.json', familyStringify);
}

const changeMaggieForNelson = async () => {
  const fullData = await fs.readFile('./simpsons.json', 'utf-8');
  const dataParsed = JSON.parse(fullData);
  const nelson = dataParsed.find((simpson) => (simpson.name === 'Nelson Muntz'));
  const maggie = dataParsed.find((simpson) => (simpson.name === 'Maggie Simpson'));
  const familyData = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const familyParsed = JSON.parse(familyData);
  familyParsed.splice(maggie.id - 1, 1, nelson);
  const familyStringify = JSON.stringify(familyParsed);
  await fs.writeFile('./simpsonFamily.json', familyStringify);
}

// readAll();
// getSimpson(1);
// removeSimpsonId6And10();
// onlySimpsonsFamily();
// addNelsonToSimpsonsFamily();
// changeMaggieForNelson();