const {decode, encode} = require('./encodeAndDecode');

describe(`A função encode,`, () => {
  test(`É uma função.`, () => {
    expect(typeof encode).toBe(`function`);
  });
  test(`recebendo as vogais a, e, i, o, u, retorna o valor 1, 2, 3, 4, 5`, () => {
    expect(encode(`a, e, i, o, u`)).toBe(`1, 2, 3, 4, 5`);
  });
  test(`recebendo outras letras, retorna as mesmas sem serem convertidas`, () => {
    expect(encode(`lucas`)).toBe(`l5c1s`);
  });
  test(`recebendo uma string, ela terá o mesmo tamanho no retorno`, () => {
    expect(encode(`lucas`)).toHaveLength(5);
  })
});

describe(`A função decode,`, () => {
  test(`É uma função.`, () => {
    expect(typeof decode).toBe(`function`);
  });
  test(`recebendo os valores 1, 2, 3, 4, 5, retorna as vogais a, e, i, o, u`, () => {
    expect(decode(`1, 2, 3, 4, 5`)).toBe(`a, e, i, o, u`);
  });
  test(`recebendo números acima de 5, retorna os pŕoprios sem serem convertidos`, () => {
    expect(decode(`5, 6, 10`)).toBe(`u, 6, a0`);
  });
  test(`recebendo uma string, ela terá o mesmo tamanho no retorno`, () => {
    expect(decode(`1, 2, 3, 4, 5, 6`)).toHaveLength(16);
  });
});
