const myRemove = require(`./myRemove`);

describe (`A função myRemove, quando chamada,`, () => {
  test(`por um array de 1, 2, 3, 4 e pedindo a retirada do valor 3, retorna o array 1, 2, 4`, () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test(`por um array 1, 2, 3, 4 e pedindo a retirada do valor 3, não retorna o array 1, 2, 3, 4`, () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test(`por um array 1, 2, 3, 4 e pedindo a retirada do valor 5, retorna o array 1, 2, 3, 4`, () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});