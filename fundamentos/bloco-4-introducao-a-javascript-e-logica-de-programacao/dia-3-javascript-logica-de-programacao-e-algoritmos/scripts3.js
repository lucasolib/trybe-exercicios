// Retorno da maior e da menor palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for(let index = 0; index < array.length; index += 1) {
    if(array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
    if(array[index].length < maiorPalavra.length) {
        menorPalavra = array[index];
}
}
console.log('Essa é a maior palavra:' + maiorPalavra);
console.log('Essa é a menor palavra:' + menorPalavra);