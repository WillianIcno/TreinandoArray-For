// os elementos de um Set nao pode se repetir 

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];   

const meuSet = new Set (nomes); 

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);
console.log(nomes)