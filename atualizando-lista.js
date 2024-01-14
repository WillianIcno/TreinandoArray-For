// A função .splice serve para Tirar elementos da lista, porém ao fazer isso é necessário criar uma constante com o valor da lista 
// atualizada depois de fazer a função
// o metodo splice, tbm adiciona 

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

const nomesAtualizado = nomes.splice(1 , 2, "Rodrigo")

console.log(nomes)
console.log(nomesAtualizado)