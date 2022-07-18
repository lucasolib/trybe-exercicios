const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (obj, key, value) => {
  const objeto = obj;
  const chave = key;
  const valor = value;
  objeto[chave] = valor;
  return objeto;
}

const showKeys = (obj) => {
  console.log(Object.keys(obj));
}

const showLength = (obj) => {
  console.log(Object.keys(obj).length);
}

const showValues = (obj) => {
  console.log(Object.values(obj));
}

const createAllLessons = (obj, obj2, obj3) => {
  const allLessons = {};
  allLessons.lesson1 = [];
  Object.assign(allLessons.lesson1, obj);
  allLessons.lesson2 = [];
  Object.assign(allLessons.lesson2, obj2);
  allLessons.lesson3 = [];
  Object.assign(allLessons.lesson3, obj3);
  return allLessons;
}

const allStudants = (obj) => {
  const lesson1Studants = obj.lesson1.numeroEstudantes;
  const lesson2Studants = obj.lesson2.numeroEstudantes;
  const lesson3Studants = obj.lesson3.numeroEstudantes;
  const allStudants = lesson1Studants + lesson2Studants + lesson3Studants;
  return allStudants;
}

const getValueByNumber = (obj, index) => {
  const valor = Object.values(obj)
  const valorEspecifico = valor[index];
  return valorEspecifico;
}

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};