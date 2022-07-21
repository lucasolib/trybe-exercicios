// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova 
// pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada 
// em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a 
// partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const registration = (fullName) => {
  const email = fullName.replace(/\s+/g, '-').toLowerCase();
  return { fullName, email: `${email}@trybe.com` };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma 
// função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma 
// string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultado = (aposta, callback) => {
  const number = Math.floor(Math.random() * 5) + 1;
  return callback(aposta, number) ? 'Parabéns, você ganhou' : 'Tente de novo' ;
}

const verificador = (aposta, number) => {
  return aposta === number;
}

// 3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. 
// Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa 
// estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (gabarito, respostas) => {
  if (gabarito === respostas) {
    return 1;
  } else if (respostas === "N.A") {
    return 0;
  } else {
    return -0.5;
  } 
}

const nota = (gabarito, respostas, action) => {
  let contador = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    const actionReturn = action(gabarito[index], respostas[index]);
    contador += actionReturn;
  }
  return `Gabarito: ${gabarito}
Suas respostas: ${respostas}
Você tirou uma nota de ${contador}/${gabarito.length}`
}
