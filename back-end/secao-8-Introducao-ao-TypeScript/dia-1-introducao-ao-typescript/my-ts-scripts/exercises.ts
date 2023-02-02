const numberInput = 7;

function isItAPrime(param: number): boolean {
      for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
}

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);



const emailInput = 'email@email.com';

function validateEmailFormat(param: string): boolean {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))


const numberList = [10, 5, 18, 2, 8, 23];

function sortInput(param: number[]): number[] {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));

const peopleInput = {
  name: 'Rui',
  age: 23,
};

function createSimpleSentence(param: { name: string; age: number }): string {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));

const ageInput = 15;

function isOfLegalAge(param: string | boolean): any {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));
