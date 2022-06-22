// Quantos valores ímpares há no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for(let index of numbers) {
    if(index%2 != 0) {
        impar += 1;
    }
    else{}        
}

if(impar != 0) {
    console.log(impar);
}
else{
    console.log("Não há valores impares no array");
}