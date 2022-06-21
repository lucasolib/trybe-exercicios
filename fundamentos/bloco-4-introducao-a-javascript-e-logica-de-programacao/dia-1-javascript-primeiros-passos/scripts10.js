// Peças de xadrez e seus movimentos

let peca = "RAinHa";
let pecaa = peca.toLowerCase();

switch (pecaa) {
  case "peao":
    console.log("Uma casa para frente ou duas se for sua primeira vez sendo mexido");
    break;
    
  case "torre":
    console.log("Horizontais e verticais");
    break;

  case "cavalo":
    console.log("Duas para a horizontal ou vertical e uma para o lado");
    break;

  case "bispo":
    console.log("Diagonais");
    break;

  case "rainha":
    console.log("Diagonais, horizontais e verticais");
    break;

  case "rei":
    console.log("Uma para a diagonal, horizontal ou vertical");
    break;

  default:
    console.log("Não é uma peça");
}