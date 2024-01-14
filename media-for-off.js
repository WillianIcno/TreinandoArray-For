// as vantagens do for elemento of ( variavel )   ele percorre toda a array e te mostra no console.log, com o comando console.log (elemento)
// elemento é apenas um nome, pode ser trocado de acordo com o gosto, é apenas uma variavel, o diferencial é o OF 

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0



for (let elemento of notas) {
    somaDasNotas += elemento
    media = somaDasNotas / notas.length
    
}

console.log (`A média do Aluno é ${media} Parabéns você passou `)