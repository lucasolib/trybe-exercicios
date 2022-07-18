const sum = require(`./sum`);

describe(`Quando a função soma é chamada`, () => {
  test(`com os parametros 0 e 0, espera o resultado 0`, () => {
    expect(sum(0, 0)).toEqual(0);
  });
  test(`com os parametros 4 e 5, espera o resultado 9`, () => {
    expect(sum(4, 5)).toEqual(9);
  });
  test(`com os parametros 4 e '5', espera que um erro seja lançado`, () => {
    expect(() => sum(4, `5`)).toThrow(Error);
  });
  test(`com os parametros 4 e '5', espera o erro lançado tenha uma string de valor específico`, () => {
    expect(() => sum(4, `5`)).toThrow(`parameters must be numbers`);
  });
});