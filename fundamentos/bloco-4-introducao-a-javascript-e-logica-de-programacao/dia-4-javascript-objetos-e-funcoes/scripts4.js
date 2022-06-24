// objetos for/in 6, 7 e 8

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ]
  };

console.log('O livro favorito de ' + leitor.nome + " " + leitor.sobrenome + ' se chama ' + 
leitor.livrosFavoritos[0].titulo);

leitor.livrosFavoritos.push({
    titulo2: 'Harry Potter e o Prisioneiro de Azkaban',
    autor2: 'JK Rowling',
    editor2: 'Rocco',
});

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + ' livros favoritos ');