// Lucro de mil produtos

const custo = 33;
const venda = 73;
let custocimp = undefined ;
let lucro = undefined;
let milLucro = undefined;

if (custo < 0 || venda < 0) {
    console.log("Erro");
}
else {
custocimp = custo * 1.2;
lucro = venda - custocimp;
milLucro = lucro * 1000;
console.log(milLucro);
}