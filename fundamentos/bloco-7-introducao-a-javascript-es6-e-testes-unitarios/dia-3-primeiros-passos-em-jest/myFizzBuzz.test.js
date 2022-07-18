const myFizzBuzz = require(`./myFizzBuzz`);

describe(`Quando a função myFizzBuzz é chamada`, () => {
  test(`recebendo 15 como parâmetro, retorna FizzBuzz`, () => {
    expect(myFizzBuzz(15)).toBe(`fizzbuzz`);
  });
  test(`recebendo 3 como parâmetro, retorna fizz`, () => {
    expect(myFizzBuzz(3)).toBe(`fizz`);
  });
  test(`recebendo 5 como parâmetro, retorna buzz`, () => {
    expect(myFizzBuzz(5)).toBe(`buzz`);
  });
  test(`recebendo um número não divisível por 3 e por 5, retorna o valor null`, () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  test(`recebendo um valor não numérico como parâmetro, retorna false`, () => {
    expect(myFizzBuzz(`5`)).toBe(false);
  });
});
