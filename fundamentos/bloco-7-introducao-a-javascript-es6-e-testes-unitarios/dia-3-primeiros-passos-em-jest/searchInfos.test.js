const searchEmployee = require(`./searchInfos`);

describe(`Quando a função searchEmployee é chamada,`, () => {
  test(`verifica se é uma função`, () => {
    expect(typeof searchEmployee).toBe(`function`);
  });
  test(`verifica se o id existe, e se não existir, a função retorna o erro: ID não identificada.`, () => {
    expect(() => searchEmployee(1212-1)).toThrow(`ID não identificada`);
  });
});