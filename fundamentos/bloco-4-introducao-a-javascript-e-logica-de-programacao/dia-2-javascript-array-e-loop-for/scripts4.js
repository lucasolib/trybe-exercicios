// Qual o maior valor no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for(let index of numbers) {
    if (maior > index){
        maior = maior;
    }
    else {
        maior = index;
    }
}

console.log(maior);